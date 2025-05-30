import { useForm } from 'react-hook-form';
import Button from './Button';
import Container from './Container';
import Input from './Form/Input';
import StyledForm from './Form/StyledForm';

interface LoginData {
  login: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, reset, setValue } = useForm<LoginData>();
  return (
    <Container>
      <StyledForm className="bg-none">
        <Input
          type="email"
          placeholder="Email"
          {...register('login', { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <Button className="w-full bg-amber-200">Log in</Button>
      </StyledForm>
    </Container>
  );
}

export default Login;
