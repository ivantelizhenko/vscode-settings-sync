import Button from './Button';
import Container from './Container';
import Input from './Form/Input';

function Login() {
  return (
    <Container>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button className="w-full bg-red-100">Log in</Button>
    </Conta>
  );
}

export default Login;
