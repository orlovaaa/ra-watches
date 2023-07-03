import './css/main.css';
import FormWatch from './components/FormWatch';

function App() {
  const initialState = [
    {
        name: 'Moscow',
        offsetUTC: 3,
    },
    {
        name: 'New York',
        offsetUTC: 7,
    }
  ]
  return (
    <FormWatch initialState={initialState}/>
  );
}

export default App;