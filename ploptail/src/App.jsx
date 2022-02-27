import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Recherche from './components/Recherche/Recherche';
import Favoris from './components/Favoris/Favoris';
import './Style/App.css';
import './Style/Contact.css';
import './Style/Default.css';
import './Style/Fav.css';
import './Style/Home.css';
import './Style/Search.css';
import Details from './components/Home/Details.jsx';
function App() {
  const [data, setData] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [allDrinks, setAllDrinks] = React.useState([]);
  const [favoris, setFavoris] = React.useState([]);
  useEffect(() => {
    let temp = null;
    if (localStorage.getItem('fav') === null) temp = null;
    else temp = localStorage.getItem('fav').split(',');
    if (temp === null) setFavoris([]);
    else setFavoris(temp.filter((item) => item !== ''));
  }, []);
  useEffect(() => {
    localStorage.setItem('fav', favoris);
  }, [favoris]);
  useEffect(() => {
    const url =
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
    const searchUrl =
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const vodka = [];
    const gin = [];
    const whisky = [];
    const rhum = [];
    const rest = [];
    fetch(url).then((response) =>
      response.json().then((result) =>
        result.drinks.map((item) =>
          fetch(`${searchUrl}${item.strDrink}`).then((response) =>
            response.json().then((data) => {
              const drink = Object.values(data.drinks[0]);
              if (drink.includes('Vodka')) {
                vodka.push(drink);
              } else if (drink.includes('Gin')) {
                gin.push(drink);
              } else if (
                drink.includes('Rye whiskey') ||
                drink.includes('Rye Whiskey') ||
                drink.includes('Whiskey')
              ) {
                whisky.push(drink);
              } else if (drink.includes('Rum')) {
                rhum.push(drink);
              } else {
                rest.push(drink);
              }
              setAllDrinks([...vodka, ...gin, ...whisky, ...rhum, ...rest]);
              setData([vodka, gin, whisky, rhum, rest]);
              setIsLoaded(true);
            })
          )
        )
      )
    );
  }, []);
  if (!isLoaded) {
    return 'Loading';
  } else {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                data={data}
                allDrinks={allDrinks}
                favoris={favoris}
                setFavoris={setFavoris}
              />
            </Route>
            <Route exact path="/Favoris">
              <Favoris favoris={favoris} setFavoris={setFavoris} />
            </Route>
            <Route exact path="/Recherche">
              <Recherche
                allDrinks={allDrinks}
                favoris={favoris}
                setFavoris={setFavoris}
              />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/:drink">
              <Details />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
