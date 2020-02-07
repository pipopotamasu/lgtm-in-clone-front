import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${color.border.darkGray};
  border-radius: 4px;
  color: ${color.input.gray};
  height: 6rem;
`

export default Textarea;
