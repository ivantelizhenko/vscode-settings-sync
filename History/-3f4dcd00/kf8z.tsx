import styled from 'styled-components';
import { Button } from '../ui/Button';

const ButtonFilter = styled(Button)`
  border: none;

  border-bottom: ${props => (props.disabled ? 'none' : '1px solid #000')};
`;

export default ButtonFilter;
