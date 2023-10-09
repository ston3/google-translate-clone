import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'



function App() {
  const { setFromLanguage,interchageLanguages,fromLanguage, toLanguage } = useStore()
  console.log(fromLanguage)
  console.log(toLanguage)
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
           <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <button
            disabled={fromLanguage === AUTO_LANGUAGE} 
            onClick={() => interchageLanguages()}
          >
            Interchange
          </button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>

    </Container>
  )
}

export default App
