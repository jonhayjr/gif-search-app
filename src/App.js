import {useEffect, useState,} from 'react';
import{
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import apiKey from './Config';


//Import Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Gifs from './components/Gifs';
import FourOhFour from './components/FourOhFour';

const App = () => {

  //Set State
  const [search, setSearch] = useState('dogs');
  const [gifs, setGifs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const history = useHistory();
 
  const getGifAPIData = (search) => {

    //Set isLoading back to true 
    setLoading(true);

    //Fetch API data for current search
    axios.get(` https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=50`)
      .then(res => {
        setGifs(res.data.data);
        setLoading(false);
      })
  }

  //Load initial API data on page load and handle page refresh
  useEffect(() => {

    console.log(history.location.pathname);
    //Get search topic from path
    const path = history.location.pathname.replace('/search/', '');

    console.log(path)

    //Update search state based on current path
    setSearch(path);

    //Get API Data for current path
    getGifAPIData(path);

  }, [])

  //Listens for change in history
  useEffect(() => {
    return history.listen((location) => {
      const path = location.pathname.replace('/search/', '');
      
      //Update search based on current path
      setSearch(path);

      //Get API Data for current path
      getGifAPIData(path);      
    }) 
 },[history]) 

 //Function to handle submit on SearchForm
  const handleSearchSubmit = (event) => {
    event.preventDefault();

    getGifAPIData(search);

    //Create path based on current search
    const path = `/search/${search}`;

    //Push path to history
    history.push(path);

    //Reset input
    event.currentTarget.reset();
  }

  //Function to handle search input change on Search Form
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  }

  return (
     
        <Container className='text-center'>
          <Header title='Gif Search'/>
          <SearchForm handleSearchSubmit={handleSearchSubmit} onSearchChange={onSearchChange}/>
          <Navbar/>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/search/dogs' />}/>
              <Route path='/search/:gif' render={() => <Gifs gifs={gifs} isLoading={isLoading}/>}/>
              <Route component={FourOhFour}/>
            </Switch>
        </Container>
  );
}

export default App;
