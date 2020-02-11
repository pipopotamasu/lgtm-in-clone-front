import React, { useState, useCallback, useMemo, ChangeEvent } from 'react';
import Button from '../atoms/Button';
import FileInput from '../atoms/FileInput';
import PreviewImage from '../atoms/PreviewImage';
import ErrorList from '../molecules/ErrorList';
import styled from 'styled-components';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ErrorListWrapper = styled.div`
  width: 500px;
  margin-bottom: 1rem;
`

const FileSelectContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LgtmForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const onChangeFile = useCallback((e: ChangeEvent) => {
    e.preventDefault();
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;

    const file = files[0];
    if (!file.type.includes('image')) {
      setErrors(['Upload image file.'])
      return;
    }

    setFile(file);
    setErrors([])

    const reader = new FileReader();
    reader.onload = e => {
      if (!e.target?.result) return;
      setPreviewFile(e.target.result as string);
    };
    reader.readAsDataURL(file);
  }, [])

  return (
    <Form>
      <ErrorListWrapper>
        <ErrorList errors={errors} />
      </ErrorListWrapper>
      <FileSelectContainer>
        <PreviewImage src={previewFile} />
        <FileInput onChange={onChangeFile} name="lgtm-image" />
      </FileSelectContainer>
      <div>
        <Button>Submit</Button>
      </div>
    </Form>
  );
};

export default LgtmForm;
