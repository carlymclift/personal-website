import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
import ContactPage from './ContactPage/ContactPage'
import Header from './Header'
import Footer from './Footer'

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
      <Route
        exact path = "/projects"
        render={() => {
          return (
            <ProjectsPage />
          )
        }}
      />
      <Route
        exact path = "/contact"
        render={() => {
          return (
            <ContactPage />
          )
        }}
      />
      <Footer />
    </main>
    </>
  );
}

export default App;
