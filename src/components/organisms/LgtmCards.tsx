import React, { useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import LgtmCard from '../molecules/LgtmCard';
import { AppState } from '../../reducers/store';
import { Post } from '../../reducers/posts';
import { useSelector, useDispatch } from "react-redux";
import { selectPost as selectPostCreator, fetchPosts as fetchPostsCreator } from '../../actions/posts';
import postsService from '../../services/PostsService';

const postsListSelector = (state: AppState) => state.posts.list;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LgtmCards: React.FC = () => {
  const postList = useSelector(postsListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    postsService.getPosts().then((res) => {
      dispatch(fetchPostsCreator(res.data))
    })
  }, [])

  const onSelectPost = useCallback(
    (post: Post): void => { dispatch(selectPostCreator(post)) },
    [dispatch]
  )

  const Cards = useMemo(() => {
    return postList.map((post: Post, i: number) => {
        return <LgtmCard post={post} onClick={onSelectPost} key={i} />
      })
    }, [postList, onSelectPost])

  return <Container>{Cards}</Container>;
};

export default LgtmCards;
