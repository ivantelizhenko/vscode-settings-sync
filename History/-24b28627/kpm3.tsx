import Button from './Button';
import Input from './Form/Input';

function Login() {
  return (
    <div>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button className="w-full bg-red-100">Log in</Button>
    </div>
  );
}

export default Login;
