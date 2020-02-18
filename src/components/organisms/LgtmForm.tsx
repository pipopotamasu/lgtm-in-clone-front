import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import Button from '../atoms/Button';
import FileInput from '../atoms/FileInput';
import PreviewImage from '../atoms/PreviewImage';
import ErrorList from '../molecules/ErrorList';
import styled from 'styled-components';
import useCreatePost from '../../hooks/useCreatePost';
import useAuth from '../../hooks/useAuth';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorListWrapper = styled.div`
  width: 500px;
  margin-bottom: 1rem;
`;

const FileSelectContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LgtmForm: React.FC = () => {
  const { currentUser } = useAuth();

  const [encodedFile, setEncodedFile] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const { createPost, loading } = useCreatePost();

  const onChangeFile = useCallback((e: ChangeEvent) => {
    e.preventDefault();
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;

    const file = files[0];
    if (!file.type.includes('image')) {
      setErrors(['Upload image file.']);
      return;
    }
    setErrors([]);

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) return;
      setEncodedFile(e.target.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (loading) return;
      setErrors([]);

      if (!encodedFile) {
        setErrors(['Upload image file.']);
        return;
      }

      if (!currentUser) {
        setErrors(['Login before uploading image.']);
        return;
      }

      await createPost(encodedFile, currentUser.sub);
    },
    [encodedFile, currentUser, loading, createPost]
  );

  return (
    <Form id="lgtm-post-form" onSubmit={onSubmit}>
      <ErrorListWrapper>
        <ErrorList errors={errors} />
      </ErrorListWrapper>
      <FileSelectContainer>
        <PreviewImage src={encodedFile} />
        <FileInput onChange={onChangeFile} name="lgtm-image" />
      </FileSelectContainer>
      <div>
        <Button type="submit" form="lgtm-post-form">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default LgtmForm;
