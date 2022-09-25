import './App.css';
import { useEffect } from 'react';
import { getAllPokemon } from './untils/pokemon';


function App() {
  const initializeURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initializeURL);
      console.log(res);
    }
    fetchPokemonData();
  }, []);

  return (
    <div className="App" >

    </div>
  );
}

export default App;
