import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './untils/pokemon';


function App() {
  const initializeURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);


  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initializeURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      setLoading(false);
    }
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    // 複数のPromise関数を実行し、全ての結果を得る
    let _pokemonData = await Promise.all(
      // ポケモンデータを配列に変換
      data.map((pokemon) => {
        // console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

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
