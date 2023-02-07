import { Button } from "./src/components/Button";
import "./src/components/sass/App.scss";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useState } from "react";

const App = () => {
  const  [pokemonId, setPokemonId] = useState(1);


  return (
    <>
      <div className="buttons-container">
           <Button icon={<TiArrowLeftOutline />} 
           handleClick={()=>{
            (pokemonId === 1)?
              setPokemonId(1):
              setPokemonId(pokemonId -1 )
            
          }
        }
         />
           {pokemonId}

        <Button icon={<TiArrowRightOutline />} 
        handleClick={()=>{setPokemonId(pokemonId+1)}}/>
      </div>
    </>
  );
};

export { App };
