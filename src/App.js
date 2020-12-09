import './App.css'
import { Route } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
import ContactPage from './ContactPage/ContactPage'
import Header from './Header'
import Footer from './Footer'
import WelcomePage from './WelcomePage/WelcomePage'

function App() {
  return (
    <>
    <main>
      <Header />
      <Route
        exact path = "/"
        render={() => {
          return (
            <WelcomePage />
          )
        }}
      />
      <Route
        exact path = "/about"
        render={() => {
          return (
            <AboutPage />
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
