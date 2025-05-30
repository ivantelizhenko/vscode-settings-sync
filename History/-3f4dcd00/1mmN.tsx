import styled from 'styled-components';
import { Button } from '../ui/Button';

const ButtonFilter = styled(Button)`
  border: none;
  &:disabled {
    border-bottom: 1px solid #000;
    color: #c2c2c2;
  }
`;

export default ButtonFilter;
