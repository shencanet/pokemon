//componentes 
import { Button } from "./src/components/Button";
import { Card } from "./src/components/Card";
//estilos
import "./src/components/sass/App.scss";
//iconos
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
//Hooks
import { useState, useEffect } from "react";



const App = () => {
  const  [pokemonId, setPokemonId] = useState(1);
  //const [pokemonName, setPokemonName] = useState('');
const [pokemonEvolutions, setPokemonEvolutionst] = useState([])


  useEffect(()=>{
    getEvolutions(pokemonId);
    console.log('se esta ejecutando use Effect')
  }, [pokemonId])
    


   async function getEvolutions(id){
      const response =await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
      const data = await response.json()
      let pokemonEvoArray = [];
      let pokemonLv1 =  data.chain.species.name;
      let pokemonLv1Img = await  getpokemonImg(pokemonLv1)
      
      pokemonEvoArray.push([pokemonLv1, pokemonLv1Img])

      if (data.chain.evolves_to.length !== 0){
        let pokemonLv2 = data.chain.evolves_to[0].species.name;
        let pokemonLv2Img = await getpokemonImg(pokemonLv2);
        pokemonEvoArray.push([pokemonLv2, pokemonLv2Img])
        //console.log(pokemonEvoArray)
      }
      if (data.chain.evolves_to[0].evolves_to.length !== 0){
        let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonLv3Img = await getpokemonImg(pokemonLv3);
        pokemonEvoArray.push([pokemonLv3, pokemonLv3Img])
        setPokemonEvolutionst(pokemonEvoArray)
      }

      

      //console.log(data.chain.species.name)
      //setPokemonName(data.chain.species.name)
    }
  
    async function getpokemonImg(name){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      const data = await response.json();
      return data.sprites.other['official-artwork'].front_default
    }
  function prevClick(){
    (pokemonId === 1)?
      setPokemonId(1):
      setPokemonId(pokemonId -1 )

  }
  function nextClick(){
      setPokemonId(pokemonId + 1)
  }

  return (
    <>
    <div className="card-container">
      {pokemonEvolutions.map(pokemon => 
      <Card 
      name = {pokemon[0]}
      img = {pokemon[0]}
      
      /> )}
        

    </div>
    
      <div className="buttons-container">
           <Button icon={<TiArrowLeftOutline />} 
           handleClick={prevClick}
         />
           {}

        <Button icon={<TiArrowRightOutline />} 
        handleClick={nextClick}/>
      </div>
    </>
  );
};

export { App };
