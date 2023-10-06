import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { Action, type State} from './types.d'

const initialState: State = {
  fromLanguage : '',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer(state: State, action: Action){
  const {type} = action
  if(type === 'INTERCHANGE_LANGUAGES'){
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }  

  if(type === 'SET_FROM_LANGUAGE'){
      return {
        ...state,
        fromLanguage: action.payload
      }
  }

  if(type === 'SET_TO_LANGUAGE'){
      return {
        ...state,
        toLanguage: action.payload
      }
  }

  if(type === 'SET_FROM_TEXT'){
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if(type === 'SET_RESULT'){
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }
  return state
}

function App() {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading},
     dispatch] = useReducer(reducer,initialState)

  console.log(fromLanguage)   
  return (
    <>
    <h1>Google Translate</h1>
    <button onClick={()=> dispatch({type:'SET_FROM_LANGUAGE', payload: 'es'})}>change language</button>

    </>
  )
}

export default App
