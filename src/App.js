import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from './untils/pokemon';


function App() {
  const initializeURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initializeURL);
      console.log(res);
      setLoading(false);
    }
    fetchPokemonData();
  }, []);

  return (
    <div className="App" >
      {loading ? (
        <h1>ローディング中...</h1>
      ) : (
          <>
            <h1>ポケモンデータを取得しました</h1>
          </>
        )}
    </div>
  );
}

export default App;
