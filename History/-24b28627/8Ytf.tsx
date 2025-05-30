import { useForm } from 'react-hook-form';
import Button from './Button';
import Container from './Container';
import Input from './Form/Input';

interface LoginData {
  login: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, reset, setValue } = useForm<LoginData>();
  return (
    <Container className="bg-purple-200">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button className="w-full bg-amber-200">Log in</Button>
    </Container>
  );
}

export default Login;
