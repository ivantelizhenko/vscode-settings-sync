import SignupForm from '../features/authentication/SignupForm';
import Heading from '../ui/Heading';

function NewUsers() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All users</Heading>
      </Row>
      <SignupForm />
    </>
  );
}

export default NewUsers;

// v1

// function NewUsers() {
//   return (
//     <>
//       <Heading as="h1">Create a new user</Heading>
//       <SignupForm />
//     </>
//   );
// }

// export default NewUsers;
