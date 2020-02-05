import React, { useEffect } from 'react';
import { color } from '../../constants/cssVariables';
import styled from 'styled-components';
import useFetchPost from '../../hooks/useFetchPost';
import Input from '../atoms/Input';
import { InputTypeEnum } from '../../enums/elements';


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
  const [fetchPost, loading] = useFetchPost();

  useEffect(() => {
    fetchPost(id);
  }, []);

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <LgtmDetailLayout>
      <LeftSection>
        <ImgWrapper>
          <Img src="https://i.imgur.com/8V3Mhu3.gif" alt="" />
        </ImgWrapper>
      </LeftSection>
      <RightSection>
        <FormGroup>
          <Label htmlFor="image-url">Image Url</Label>
          <Input type={InputTypeEnum.text} value="hoge" id="image-url" name="image-url" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="data-url">Data Url</Label>
          <Input type={InputTypeEnum.text}  value="hoge" id="data-url" name="data-url" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="markdown">Markdown</Label>
          <Textarea value={InputTypeEnum.text}  id="markdown" name="markdown" />
        </FormGroup>
      </RightSection>
    </LgtmDetailLayout>
  );
};

export default LgtmDetail;