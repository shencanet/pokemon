import {Button} from "./src/components/Button";
import './src/components/sass/App.scss';
import { TiArrowLeftOutline  } from "react-icons/ti";
import { TiArrowRightOutline  } from "react-icons/ti";

const App = ()=>{
    return(
        <>
        <div className="buttons-container">
            <Button text= {<TiArrowLeftOutline />}/>
            <Button text= {<TiArrowRightOutline />}/>
            
        </div>
            
        </>
   

    )
}

export {App}