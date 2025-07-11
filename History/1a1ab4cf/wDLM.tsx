import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAppState } from '../../../contexts/appContext/AppContext';
import { useFilters } from '../../../contexts/filtersContext/FiltersContext';

import UserListItem from './UserListItem';
import Message from '../../../ui/Message';

const StyledUsersLists = styled.ul`
  padding: 2.8rem 3.6rem;
`;
const MessaageContainer = styled.div`
  padding: 2.8rem 3.6rem;
  display: flex;
  justify-content: center;
  p {
    font-size: 2.4rem;
  }
`;

function UsersLists() {
  const { users } = useAppState();
  const { departmentFilters, countryFilters, statusFilters } = useFilters();
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    setFilteredUsers(() => {
      if (
        departmentFilters.length === 0 &&
        countryFilters.length === 0 &&
        statusFilters.length === 0
      )
        return users;

      const departmentsReturn =
        departmentFilters.length > 0
          ? users
              .filter(user => departmentFilters.includes(user.department.value))
              .toSorted((a, b) =>
                a.department.value.localeCompare(b.department.value)
              )
          : users;

      const countryReturn =
        countryFilters.length > 0
          ? departmentsReturn.filter(user =>
              countryFilters.includes(user.country.value)
            )
          : departmentsReturn;

      const statusReturn =
        statusFilters.length > 0
          ? departmentsReturn.filter(user =>
              statusFilters.includes(user.status.value)
            )
          : countryReturn;

      return statusReturn;
    });
    // setFilteredUsers(prev =>
    //   statusFilters.length > 0
    //     ? prev.filter(user => statusFilters.includes(user.status.value))
    //     : prev
    // );
    // setFilteredUsers(prev =>
    //   countryFilters.length > 0
    //     ? prev.filter(user => countryFilters.includes(user.country.value))
    //     : prev
    // );
    // if (
    //   departmentFilters.length === 0 &&
    //   countryFilters.length === 0 &&
    //   statusFilters.length === 0
    // ) {
    //   setFilteredUsers(users);
    // }
  }, [users, departmentFilters, countryFilters, statusFilters]);

  if (users.length === 0)
    return (
      <MessaageContainer>
        <Message>Empty. Add users! 😉</Message>
      </MessaageContainer>
    );

  if (filteredUsers.length === 0)
    return (
      <MessaageContainer>
        <Message>Oops! You don't have users of this category. 😉</Message>
      </MessaageContainer>
    );

  return (
    <StyledUsersLists>
      {filteredUsers.map(user => (
        <UserListItem user={user} key={user.id} />
      ))}
    </StyledUsersLists>
  );
}

export default UsersLists;
