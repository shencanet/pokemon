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

  useEffect(()=>{
    getEvolutions(pokemonId);
  })
    

   async function getEvolutions(id){
      
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
        <Card />

    </div>
    
      <div className="buttons-container">
           <Button icon={<TiArrowLeftOutline />} 
           handleClick={prevClick}
         />
           {pokemonId}

        <Button icon={<TiArrowRightOutline />} 
        handleClick={nextClick}/>
      </div>
    </>
  );
};

export { App };
