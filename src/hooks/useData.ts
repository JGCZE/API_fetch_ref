import { useEffect, useState } from 'react'
import collaborations from '../api/data';

const collab = collaborations

interface ICollabs {
  id: number;
  collabs: {
    id: number;
    name: string;
    lastName: string;
  }
}

interface TData {
  collabs: ICollabs[];
  error: string | null;
}


const useDataHook = (): TData => {
  const [collabs, setCollabs] = useState<ICollabs[]>([]);
  const [error, setError] = useState<string | null>(null);

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
