import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { useFetchPosts } from 'src/hooks/useFetchPosts';
import { RootContext } from 'src/contexts/root';
jest.mock('react-redux');

describe('useFetchPosts', () => {
  it('allows you to fetch posts', async () => {
    const context = {
      $api: {
        post: {
          getPosts: jest.fn().mockImplementation(() => {
            return { data: [] }
          })
        }
      },
      $notification: {
        error: jest.fn()
      }
    } as any

    const wrapper: React.FunctionComponent = ({ children }) => <RootContext.Provider value={context}>{children}</RootContext.Provider>
    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts(), { wrapper })
    expect(result.current.loading).toBe(false)

    act(() => {
      result.current.fetchPosts({ bookmarked: false });
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(context.$api.post.getPosts).toBeCalledWith({ bookmarked: false })
    expect(context.$notification.error).not.toBeCalled()
  });
});