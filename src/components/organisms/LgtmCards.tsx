import React, { useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import LgtmCard from 'src/components/molecules/LgtmCard';
import { AppState } from 'src/reducers/store';
import { Post } from 'src/reducers/posts';
import { useSelector, useDispatch } from 'react-redux';
import { selectPost as selectPostCreator } from 'src/actions/posts';
import { useFetchPosts } from 'src/hooks/useFetchPosts';
import { useBookmark } from 'src/hooks/useBookmark';
import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { PostSearchQuery } from 'src/services/post';

const postsListSelector = (state: AppState) => state.posts.list;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LgtmCards: React.FC<{ query?: PostSearchQuery }> = ({ query }) => {
  const postList = useSelector(postsListSelector);
  const dispatch = useDispatch();
  const { currentUser } = useCurrentUser();
  const { fetchPosts } = useFetchPosts();
  const { onClickBookmark } = useBookmark();

  useEffect(() => {
    fetchPosts(query);
  }, [fetchPosts, query]);

  const onSelectPost = useCallback(
    (post: Post): void => {
      dispatch(selectPostCreator(post));
    },
    [dispatch]
  );

  const Cards = useMemo(() => {
    return postList.map((post: Post, i: number) => {
      return (
        <LgtmCard
          post={post}
          onClickImg={onSelectPost}
          key={i}
          loggedIn={!!currentUser}
          onClickBookmark={onClickBookmark}
        />
      );
    });
  }, [postList, onSelectPost, currentUser, onClickBookmark]);

  return <Container>{Cards}</Container>;
};

export default LgtmCards;
