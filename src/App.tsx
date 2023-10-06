import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'



function App() {
  const { setFromLanguage,fromLanguage }= useStore()
  return (
    <>
    <h1>Google Translate</h1>
    <button onClick={()=> setFromLanguage('es')}>change language</button>
      {fromLanguage}
    </>
  )
}

export default App
