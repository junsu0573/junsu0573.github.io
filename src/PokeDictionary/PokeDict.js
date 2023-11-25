import { useCallback, useEffect, useState } from "react";
import PokeCard from "./PokeCard";

function PokeDict() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState({
    count: null,
    results: [],
    details: {},
  });
  const getData = useCallback(async () => {
    const json = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`)
    ).json();

    setPokemons({ count: json.count, results: json.results });

    for (const item of json.results) {
      const basicData = await (await fetch(item.url)).json();
      const additionalData = await (await fetch(basicData.species.url)).json();
      setPokemons((prev) => ({
        ...prev,
        details: {
          ...prev.details,
          [basicData.name]: { basic: basicData, additional: additionalData },
        },
      }));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="font-pokemon p-10">
      {loading ? <h1>Loading...</h1> : <h1>Poke Dictionary</h1>}
      <div className="grid grid-cols-3 gap-5">
        {loading
          ? null
          : pokemons.results.map((item) => {
              const pokemon = pokemons.details[`${item.name}`];
              return (
                <PokeCard
                  key={item.name}
                  order={pokemon.basic.order}
                  name={item.name}
                  image={`${pokemon.basic.sprites.front_default}`}
                  types={pokemon.basic.types}
                />
              );
            })}
      </div>
    </div>
  );
}

export default PokeDict;
