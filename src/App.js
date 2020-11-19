import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Header from './Header'

function App() {
  return (
    <>
    <main>
      <Header />
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
