import React, { useMemo } from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

const Ul = styled.ul`
  background-color: ${color.list.errorBg};
  color: ${color.list.errorText};
  border-color: ${color.list.errorBorder};
  width: 100%;
  text-align: center;
  list-style: none;
  padding: 1rem;
  border-radius: 4px;
`

const ErrorList: React.FC<{ errors: string[] }> = ({ errors }) => {
  const ErrorItems = useMemo(() => {
    return errors.map((error, i) => <li key={i} >{ error }</li>)
  }, [errors])

  if (errors.length === 0) return <></>;

  return (
    <Ul>
      { ErrorItems }
    </Ul>
  );
};

export default ErrorList;
