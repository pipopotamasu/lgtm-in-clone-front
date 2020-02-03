import React, { useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import LgtmCard from '../molecules/LgtmCard';
import { AppState } from '../../reducers/store';
import { Post } from '../../reducers/posts';
import { useSelector, useDispatch } from "react-redux";
import { selectPost } from '../../actions/posts';

const postsListSelector = (state: AppState) => state.posts.list;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LgtmCards: React.FC = () => {
  const postList = useSelector(postsListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // api call
  }, [])

  const onSelectPost = useCallback(
    (post: Post): void => { dispatch(selectPost(post)) },
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
