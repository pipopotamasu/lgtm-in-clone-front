import React, { useMemo } from 'react';
import { color, fontSize } from '../../constants/cssVariables';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Textarea from '../atoms/Textarea';
import FormGroup from '../atoms/FormGroup';
import { IoIosStar } from 'react-icons/io';
import { Post } from '../../reducers/posts';
import useBookmark from '../../hooks/useBookmark';
import useAuth from '../../hooks/useAuth';

const LgtmDetailLayout = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  width: 33%;
  padding: 0 1rem;
`;

const RightSection = styled.div`
  width: 67%;
  padding: 0 1rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid ${color.border.gray};
  padding: 0.3rem;
  border-radius: 4px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Label = styled.label`
  margin-bottom: 0.2rem;
  cursor: pointer;
`;

const ButtonText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 1.2rem;
  margin-left: 0.5rem;
  margin-bottom: 0.1rem;
`;

const LgtmDetail: React.FC<{ post: Post }> = ({ post }) => {
  const { onClickBookmark, loading } = useBookmark();
  const { currentUser } = useAuth();

  const markdownVal = useMemo(() => {
    if (!post) return '';
    return `[![LGTM](${post.src})](${window.location.origin}/posts/${post.id})`;
  }, [post]);

  return (
    <LgtmDetailLayout>
      <LeftSection>
        <ImgWrapper>
          <Img src={post.src} alt="" />
        </ImgWrapper>
      </LeftSection>
      <RightSection>
        <FormGroup>
          <Label htmlFor="image-url">Image Url</Label>
          <Input
            type="text"
            defaultValue={post.src}
            id="image-url"
            name="image-url"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="data-url">Data Url</Label>
          <Input
            type="text"
            defaultValue={`${window.location.origin}/posts/${post.id}`}
            id="data-url"
            name="data-url"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="markdown">Markdown</Label>
          <Textarea defaultValue={markdownVal} id="markdown" name="markdown" />
        </FormGroup>
        <Button
          onClick={() => onClickBookmark(post)}
          disabled={loading || !currentUser}
          bgColor={post.bookmarked ? color.button.bookmarkedBg : ''}
          borderColor={post.bookmarked ? color.button.bookmarkedBorder : ''}
        >
          <IoIosStar
            size={fontSize.icon.base}
            color={post.bookmarked ? color.text.white : color.text.black}
          />
          <ButtonText
            color={post.bookmarked ? color.text.white : color.text.black}
          >
            My List
          </ButtonText>
        </Button>
      </RightSection>
    </LgtmDetailLayout>
  );
};

export default LgtmDetail;
