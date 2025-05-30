import { FormHTMLAttributes } from 'react';

function StyledForm({
  children,
  ...others
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <Container>
      <form
        className={`w-full  bg-blue-200 flex flex-col gap-[1.2rem] items-center justify-center translate-y-[-8rem]`}
        {...others}
      >
        {children}
      </form>
    </Container>
  );
}

export default StyledForm;
