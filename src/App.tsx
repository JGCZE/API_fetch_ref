import './App.css';
import useDataHook from './hooks/useData';

const App = () => {
  const { collabs, error } = useDataHook()
  console.log(collabs, error)

  return (
    <>
     
    </>
  )
}

export default App;
