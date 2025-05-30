import Input from './Form/Input';

function Login() {
  return (
    <div>
      <h2></h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Log in</Button>
    </div>
  );
}

export default Login;
