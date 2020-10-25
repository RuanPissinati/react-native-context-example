import { Container, Form, Jumbotron } from 'react-bootstrap';
import { getPokemonByName } from './services/api';
import {SearchProvider} from '../src/contexts/SearchContext';
import { useSearchContext } from '../src/contexts/SearchContext'

// import './App.css';

function App() {
  const {searchData, setSearchData} = useSearchContext();
  function onChangeInput(event){
    const text = event.target.value;
    if(text.length >= 3){
      getPokemonByName(text.toLowerCase()).then(({data})=>{
        setSearchData(data)
      })
    }
  } 

  return (
    <Container>
    <Jumbotron>
      <h1>PokeDesk</h1>
      <Form>
        <Form.Control type="text" placeholder="Digite o nome de um pokemon para busca-lo." onChange={onChangeInput}/>
        {
         searchData && <img src={searchData.sprites.front_default} alt=""/>
        }
        
      </Form>
    </Jumbotron>
  </Container>
  );
}

export default App;
