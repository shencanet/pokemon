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


  useEffect(()=>{
    getEvolutions(pokemonId);
    console.log('se esta ejecutando use Effect')
  }, [pokemonId])
    


   async function getEvolutions(id){
      const response =await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
      const data = await response.json()
      let pokemonLv1 = data.chain.species.name;

      //console.log(data.chain.species.name)
      //setPokemonName(data.chain.species.name)
    }
  
    async function geypokemonNames(name){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
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
        <Card  />

    </div>
    
      <div className="buttons-container">
           <Button icon={<TiArrowLeftOutline />} 
           handleClick={prevClick}
         />
           {pokemonName}

        <Button icon={<TiArrowRightOutline />} 
        handleClick={nextClick}/>
      </div>
    </>
  );
};

export { App };
