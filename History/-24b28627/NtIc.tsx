import { useForm } from 'react-hook-form';
import Button from './Button';
import Container from './Container';
import Input from './Form/Input';
import StyledForm from './Form/StyledForm';
import { loginUser } from '../firebase/firestoreOperations';
import { useSchedule } from '../store/scheduleContext/ScheduleContext';
import { useState } from 'react';

interface LoginData {
  login: string;
  password: string;
}

function Login() {
  const [loginOrRegistration, setLoginOrRegistration] = useState<
    'login' | 'registration'
  >('login');
  const { register, handleSubmit, reset } = useForm<LoginData>();
  const { setAuthTrue } = useSchedule();

  async function onSubmit(data: LoginData) {
    const { login, password } = data;

    if (loginOrRegistration === 'login') {
      const isAuth = await loginUser(login, password);
      if (isAuth) {
        setAuthTrue();
      }
    }

    reset();
  }
  return (
    <Container>
      <h2>{loginOrRegistration === 'login' ? 'Log in' : 'Registration'}</h2>
      <StyledForm className="bg-none" onSubmit={handleSubmit(onSubmit)}>
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
        <Button className="w-full bg-amber-200">
          {loginOrRegistration === 'login' ? 'Log in' : 'Registration'}{' '}
        </Button>
        <Button
          onClick={() => {
            setLoginOrRegistration('login');
          }}
        >
          {loginOrRegistration === 'registration' ? 'Registration' : 'Back'}
        </Button>
      </StyledForm>
    </Container>
  );
}

export default Login;
