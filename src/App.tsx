import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import InputForm from './components/InputForm'

function App() {

  return (
    <div className='wrapper'>
      <Header/>
      <div className='container'>
        <InputForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
