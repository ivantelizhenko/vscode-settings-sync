import styled from 'styled-components';
import { Button } from '../ui/buttons/Button';

const ButtonFilter = styled(Button)`
  border: none;
  &:disabled {
    border: 1px solid #c2c2c2;
    color: #c2c2c2;
  }
`;

export default ButtonFilter;
