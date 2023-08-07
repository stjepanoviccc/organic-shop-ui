import classes from './App.module.scss';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://react-organic-shop-5b019-default-rtdb.firebaseio.com/.json')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={classes.flow}>
      Hello World
    </div>
  );
}

export default App;
