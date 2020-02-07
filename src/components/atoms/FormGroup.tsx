import React from 'react';
import styled from 'styled-components';

const FormGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const FormGroup: React.FC = ({ children }) => {
return <FormGroupStyle>{ children }</FormGroupStyle>
}

export default FormGroup;
