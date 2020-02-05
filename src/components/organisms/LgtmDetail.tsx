import React, { useEffect, useMemo } from 'react';
import { color } from '../../constants/cssVariables';
import styled from 'styled-components';
import useFetchPost from '../../hooks/useFetchPost';
import Input from '../atoms/Input';
import { InputTypeEnum } from '../../enums/elements';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers/store';

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

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Label = styled.label`
  margin-bottom: 0.2rem;
  cursor: pointer;
`

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${color.border.darkGray};
  border-radius: 4px;
  color: ${color.input.gray};
  height: 6rem;
`

const LgtmDetail: React.FC<{ id: number }> = ({ id }) => {
  const postSelected = useSelector(postSelectedSelector);
  const [fetchPost, loading] = useFetchPost();

  useEffect(() => {
    fetchPost(id);
  }, [fetchPost, id]);

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
      </RightSection>
    </LgtmDetailLayout>
  );
};

export default LgtmDetail;