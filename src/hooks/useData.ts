import { useEffect, useState } from 'react'
import collaborations from '../api/data';

const collab = collaborations

const useDataHook = async () => {
  const [collabs, setCollabs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCollabs = async () => {
      try {
        console.log(collab);
        setCollabs(collab);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    getCollabs();
  }, []);

  return { collabs, error };
}

export default useDataHook;
