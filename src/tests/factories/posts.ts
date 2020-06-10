import { Post } from 'src/reducers/posts';

export function createPost(post: Post | Record<string, any> = {}): Post {
  return {
    ...{
      id: 1,
      src: 'test src',
      userId: 'test user id',
      upvote: false,
      report: false,
      bookmarked: false,
    },
    ...post,
  };
}
