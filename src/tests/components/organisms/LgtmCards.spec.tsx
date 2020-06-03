import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LgtmCards from 'src/components/organisms/LgtmCards';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useFetchPosts } from 'src/hooks/useFetchPosts';
import { BrowserRouter as Router } from 'react-router-dom';
import { createPost } from 'src/tests/factories/posts';
import { PostsActionEnum } from 'src/actions/posts';

jest.mock('src/hooks/useFetchPosts');
const mockStoreCreater = configureStore();

describe('components/organisms/LgtmCards', () => {
  it('renders LgtmCards', async () => {
    (useFetchPosts as any).mockReturnValue({
      fetchPosts: jest.fn(),
      loading: false,
    });

    const store = mockStoreCreater({
      posts: {
        list: [createPost()],
      },
      auth: {
        currentUser: null,
      },
    });

    const { container } = render(
      <Router>
        <Provider store={store}>
          <LgtmCards />
        </Provider>
      </Router>
    );

    expect(container.querySelectorAll('img').length).toBe(1);
  });

  describe('when clicking LgtmCard', () => {
    it('dispatches select action', () => {
      (useFetchPosts as any).mockReturnValue({
        fetchPosts: jest.fn(),
        loading: false,
      });

      const post = createPost({ src: 'test' });

      const store = mockStoreCreater({
        posts: {
          list: [post],
        },
        auth: {
          currentUser: null,
        },
      });

      const { container } = render(
        <Router>
          <Provider store={store}>
            <LgtmCards />
          </Provider>
        </Router>
      );
      fireEvent.click(container.querySelector('img')!);
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          payload: post,
          type: PostsActionEnum.SELECT_POST,
        },
      ]);
    });
  });
});
