import { FormHTMLAttributes } from 'react';
import Container from '../Container';

function StyledForm({
  children,
  ...others
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <Container className="bg-blue-200">
      <form
        className={`w-full flex flex-col gap-[1.2rem] items-center justify-center translate-y-[-8rem]`}
        {...others}
      >
        {children}
      </form>
    </Container>
  );
}

export default StyledForm;
