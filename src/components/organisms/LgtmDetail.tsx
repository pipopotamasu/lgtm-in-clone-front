import React, { useMemo } from 'react';
import { color, fontSize } from '../../constants/cssVariables';
import styled from 'styled-components';
import Input from 'src/components/atoms/Input';
import InputLabel from 'src/components/atoms/InputLabel';
import Button from 'src/components/atoms/Button';
import Textarea from 'src/components/atoms/Textarea';
import FormGroup from 'src/components/atoms/FormGroup';
import { IoIosStar } from 'react-icons/io';
import { Post } from 'src/reducers/posts';
import { useBookmark } from 'src/hooks/useBookmark';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

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

const ButtonText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 1.2rem;
  margin-left: 0.5rem;
  margin-bottom: 0.1rem;
`;

const LgtmDetail: React.FC<{ post: Post }> = ({ post }) => {
  const { onClickBookmark, loading } = useBookmark();
  const { currentUser } = useCurrentUser();

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
          <InputLabel htmlFor="image-url">Image Url</InputLabel>
          <Input
            type="text"
            defaultValue={post.src}
            id="image-url"
            name="image-url"
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="data-url">Data Url</InputLabel>
          <Input
            type="text"
            defaultValue={`${window.location.origin}/posts/${post.id}`}
            id="data-url"
            name="data-url"
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="markdown">Markdown</InputLabel>
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
