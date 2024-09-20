import Navbar from './components/navigation.js'
import Header from './components/header.js'
import Contact from './components/contact.js'
import Portfolio from './components/portfolio.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './style.css'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  )
}




export default App;
