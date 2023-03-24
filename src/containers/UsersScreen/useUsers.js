import {useEffect, useState} from 'react';
import {getUsers} from '../../services/api';

const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getUsers()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {loading, data, error};
};

export default useUsers;
