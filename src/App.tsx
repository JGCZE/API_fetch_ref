import { useState } from 'react';
import style from './App.module.css';
import OneSpecificColabs from './components/OneSpecificColabs';
import useDataHook from './hooks/useData';

const App = () => {
  const { collabs, error } = useDataHook()
  const [collabsFrom, setCollabsFrom] = useState(1)

  error && console.log(error)

  return (
    <>
      <h1>Collabs</h1>
      <div>
        {/* button komponenta */}
        <button onClick={() => setCollabsFrom(1)}>CZ</button>
        <button onClick={() => setCollabsFrom(2)}>SK</button>
        <button onClick={() => setCollabsFrom(3)}>DE</button>
      </div>

      <ul className={style.container}>
        {collabs.map((collab) => {
          if(collab.id === collabsFrom){
            return (
              <OneSpecificColabs collab={collab} />
            )
          }
        }
        )}
      </ul>
    </>
  );
};
export default App;
