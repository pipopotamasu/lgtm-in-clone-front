import React, { useCallback, useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';
import LgtmCard from '../molecules/LgtmCard';
import { AppState } from '../../reducers/store';
import { Post } from '../../reducers/posts';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPost as selectPostCreator,
  fetchPosts as fetchPostsCreator
} from '../../actions/posts';
import {
  handleErrorMessage as handleErrorMessageCreator,
} from '../../actions/globalMessages';
import postsService from '../../services/PostsService';
import usePlaceholderCards from '../../hooks/usePlaceholderCards';

const postsListSelector = (state: AppState) => state.posts.list;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LgtmCards: React.FC = () => {
  const postList = useSelector(postsListSelector);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    postsService.getPosts().then((res) => {
      dispatch(fetchPostsCreator(res.data));
      setLoading(false);
    });
  }, []);

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
