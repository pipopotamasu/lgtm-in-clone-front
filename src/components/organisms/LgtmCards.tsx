import React, { useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import LgtmCard from '../molecules/LgtmCard';
import { AppState } from '../../reducers/store';
import { Post } from '../../reducers/posts';
import { useSelector, useDispatch } from 'react-redux';
import { selectPost as selectPostCreator } from '../../actions/posts';
import usePlaceholderCards from '../../hooks/usePlaceholderCards';
import useFetchPosts from '../../hooks/useFetchPosts';

const postsListSelector = (state: AppState) => state.posts.list;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LgtmCards: React.FC = () => {
  const postList = useSelector(postsListSelector);
  const dispatch = useDispatch();
  const [fetchPosts, loading] = useFetchPosts();

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
      return <LgtmCard post={post} onClick={onSelectPost} key={i} />;
    });
  }, [postList, onSelectPost]);

  const PlaceholderCards = usePlaceholderCards(10);

  if (loading) {
    return <Container>{PlaceholderCards}</Container>;
  }

  return <Container>{Cards}</Container>;
};

export default LgtmCards;
