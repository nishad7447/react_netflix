import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { originals,action ,ComedyMovies,HorrorMovies,RomanceMovies} from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Original' url={originals}/>
      <RowPost title='Action' isSamll url={action}/>
      <RowPost title='ComedyMovies' isSamll url={ComedyMovies}/>
      <RowPost title='HorrorMovies' isSamll url={HorrorMovies}/>
      <RowPost title='RomanceMovies' isSamll url={RomanceMovies}/>


    </div>
  );
}

export default App;
