import { Button } from "./src/components/Button";
import "./src/components/sass/App.scss";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";

const App = () => {
  return (
    <>
      <div className="buttons-container">
           <Button icon={<TiArrowLeftOutline />} handleClick={()=>{console.log('anterior')}}/>

        <Button icon={<TiArrowRightOutline />} handleClick={()=>{console.log('siguiente')}}/>
      </div>
    </>
  );
};

export { App };
