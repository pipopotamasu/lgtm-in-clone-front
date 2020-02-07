import React, { useEffect, useMemo } from 'react';
import { color, fontSize } from '../../constants/cssVariables';
import styled from 'styled-components';
import useFetchPost from '../../hooks/useFetchPost';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Textarea from '../atoms/Textarea';
import FormGroup from '../atoms/FormGroup';
import { InputTypeEnum } from '../../enums/elements';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers/store';
import { IoIosStar } from "react-icons/io";

const postSelectedSelector = (state: AppState) => state.posts.selected;

const LgtmDetailLayout = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  width: 33%;
  padding: 0 1rem;
`

const RightSection = styled.div`
  width: 67%;
  padding: 0 1rem;
`

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
`

const ButtonText = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  margin-bottom: 0.1rem;
`

const LgtmDetail: React.FC<{ id: number }> = ({ id }) => {
  const postSelected = useSelector(postSelectedSelector);
  const [fetchPost, loading] = useFetchPost();

  useEffect(() => {
    if (!postSelected) fetchPost(id);
  }, [fetchPost, id, postSelected]);

  const markdownVal = useMemo(() => {
    if (!postSelected) return '';
    return `[![LGTM](${postSelected.src})](${window.location.href})`
  }, [postSelected])

  if (loading || !postSelected) {
    return <p>Loading...</p>
  }

  return (
    <LgtmDetailLayout>
      <LeftSection>
        <ImgWrapper>
          <Img src={postSelected.src} alt="" />
        </ImgWrapper>
      </LeftSection>
      <RightSection>
        <FormGroup>
          <Label htmlFor="image-url">Image Url</Label>
          <Input
            type={InputTypeEnum.text}
            value={ postSelected.src }
            id="image-url"
            name="image-url"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="data-url">Data Url</Label>
          <Input
            type={InputTypeEnum.text}
            value={window.location.href}
            id="data-url"
            name="data-url"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="markdown">Markdown</Label>
          <Textarea
            value={markdownVal}
            id="markdown"
            name="markdown"
          />
        </FormGroup>
        <Button>
          <IoIosStar size={fontSize.icon.base} />
          <ButtonText>My List</ButtonText>
        </Button>
      </RightSection>
    </LgtmDetailLayout>
  );
};

export default LgtmDetail;