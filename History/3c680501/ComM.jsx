import AddUser from '../features/authentication/AddUser';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import UserTable from '../features/authentication/UserTable';

function NewUsers() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All users</Heading>
      </Row>
      <Row type="vertical">
        <UserTable />
        <AddUser />
      </Row>
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
