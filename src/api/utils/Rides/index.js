import {SERVER_URL} from '../../base-url';

export const fetchUsers = async () => {
  const response = await fetch(`${SERVER_URL}/users`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `${val}`,
    },
  });
  return response;
};
