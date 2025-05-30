import { ContainerProps } from '../../types/types';

function FormContainer({ children, className }: ContainerProps) {
  return <div className={` ${className}`}>{children}</div>;
}

export default FormContainer;
