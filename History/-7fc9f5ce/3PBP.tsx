import { ContainerProps } from '../../types/types';

function FormContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={`w-full  bg-blue-200 flex items-center justify-center translate-y-[-5rem] ${className}`}
    >
      {children}
    </div>
  );
}

export default FormContainer;
