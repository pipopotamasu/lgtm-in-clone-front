import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetchPosts } from 'src/hooks/useFetchPosts';
import { RootContext } from 'src/contexts/root';
import { PostsActionEnum } from 'src/actions/posts';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStoreCreater = configureStore();

describe('useFetchPosts', () => {
  describe('success', () => {
    it('allows you to fetch posts', async () => {
      const store = mockStoreCreater({});

      const context = {
        $api: {
          post: {
            getPosts: jest.fn().mockImplementation(() => {
              return { data: [] };
            }),
          },
        },
        $notification: {
          error: jest.fn(),
        },
      } as any;

      const wrapper: React.FunctionComponent = ({ children }) => (
        <Provider store={store}>
          <RootContext.Provider value={context}>
            {children}
          </RootContext.Provider>
        </Provider>
      );
      const { result, waitForNextUpdate } = renderHook(() => useFetchPosts(), {
        wrapper,
      });
      expect(result.current.loading).toBe(false);

      act(() => {
        result.current.fetchPosts({ bookmarked: false });
      });

      expect(result.current.loading).toBe(true);

      await waitForNextUpdate();

      expect(result.current.loading).toBe(false);
      expect(context.$api.post.getPosts).toBeCalledWith({ bookmarked: false });
      expect(context.$notification.error).not.toBeCalled();
      const actions = store.getActions();
      expect(actions).toEqual([
        { type: PostsActionEnum.FETCH_POSTS, payload: [] },
      ]);
    });
  });

  describe('error', () => {
    it('shows error', async () => {
      const store = mockStoreCreater({});

      const context = {
        $api: {
          post: {
            getPosts: jest.fn().mockImplementation(() => {
              throw new Error('error message');
            }),
          },
        },
        $notification: {
          error: jest.fn(),
        },
      } as any;

      const wrapper: React.FunctionComponent = ({ children }) => (
        <Provider store={store}>
          <RootContext.Provider value={context}>
            {children}
          </RootContext.Provider>
        </Provider>
      );
      const { result } = renderHook(() => useFetchPosts(), { wrapper });
      expect(result.current.loading).toBe(false);

      act(() => {
        result.current.fetchPosts({ bookmarked: false });
      });

      expect(result.current.loading).toBe(false);
      expect(context.$notification.error).toBeCalledWith('error message');
      const actions = store.getActions();
      expect(actions).toEqual([]);
    });
  });
});
