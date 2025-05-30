import { ContainerProps } from '../../types/types';

function FormContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={`w-fit p-[2.4rem]  bg-blue-200 flex items-center justify-center translate-y-[-8rem] ${className}`}
    >
      {children}
    </div>
  );
}

export default FormContainer;
