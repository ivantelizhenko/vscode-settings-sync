import styled from 'styled-components';
import { Button } from '../ui/Button';

const ButtonFilter = styled(Button)<{ disabled: boolean }>`
  border: none;

  border-bottom: ${props => props.disabled};
`;

export default ButtonFilter;
