import axios from 'axios';

export const getUsers = async () => {
  try {
    const {data} = await axios.get(
      'https://random-data-api.com/api/v2/users?size=10',
    );

    return data;
  } catch (err) {
    console.error(err);
  }
};
