import styled from 'styled-components';
import { Button } from '../ui/Button';

const ButtonFilter = styled(Button)<disabled>`
  border: none;

  border-bottom: ${props => prosp.disabled};
`;

export default ButtonFilter;
