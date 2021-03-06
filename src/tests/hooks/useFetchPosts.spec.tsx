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
            getPosts: jest.fn().mockResolvedValue({ data: [] }),
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
      const { result } = renderHook(() => useFetchPosts(), {
        wrapper,
      });

      act(() => {
        result.current.fetchPosts({ bookmarked: false });
      });

      // not working due to nothing to rerender
      // https://react-hooks-testing-library.com/reference/api#waitfornextupdate
      // await waitForNextUpdate()
      await new Promise((r) => setTimeout(r, 0));

      expect(context.$api.post.getPosts).toBeCalledWith({ bookmarked: false });
      expect(context.$notification.error).not.toBeCalled();

      const actions = store.getActions();
      expect(actions).toEqual([
        { type: PostsActionEnum.FETCH_POSTS, payload: [] },
      ]);
    });
  });
});
