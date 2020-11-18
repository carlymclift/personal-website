import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'

function App() {
  return (
    <>
    <main>
      <Route
        exact path = "/"
        render={() => {
          return (
            <HomePage />
          )
        }}
      />
    </main>
    </>
  );
}

export default App;
