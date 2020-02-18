import React, { useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import LgtmCard from '../molecules/LgtmCard';
import { AppState } from '../../reducers/store';
import { Post } from '../../reducers/posts';
import { useSelector, useDispatch } from 'react-redux';
import { selectPost as selectPostCreator } from '../../actions/posts';
import usePlaceholderCards from '../../hooks/usePlaceholderCards';
import useFetchPosts from '../../hooks/useFetchPosts';
import useBookmark from '../../hooks/useBookmark';

const postsListSelector = (state: AppState) => state.posts.list;
const currentUserSelector = (state: AppState) => state.auth.currentUser;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LgtmCards: React.FC = () => {
  const postList = useSelector(postsListSelector);
  const currentUser = useSelector(currentUserSelector);
  const dispatch = useDispatch();
  const { fetchPosts, loading } = useFetchPosts();
  const { onClickBookmark } = useBookmark();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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

  const PlaceholderCards = usePlaceholderCards(10);

  if (loading) {
    return <Container>{PlaceholderCards}</Container>;
  }

  return <Container>{Cards}</Container>;
};

export default LgtmCards;
