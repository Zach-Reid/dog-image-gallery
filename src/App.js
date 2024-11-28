import './App.css';
import './BreedSelector.js';
import BreedSelect from './BreedSelector.js';
//Author: Zachary Reid, QAP 3
function App() {
  return (
    <div className="main">
      <div className="Topbox">
        <header>
          <span className="DIGlogo">DIG</span>
          <span className="DOGlogo">dog</span><br></br>
          <span className="Dogtitle">(Dog Image Gallery)</span>
        </header>
        <div className="instruct">
          Instructions: Select the breed of dog you would like from the dropdown menu. Then, input the number of images you would like to see from 1 to 100.
          <br></br><br></br><br></br> Images provided by the Dog CEO API. <a href="https://dog.ceo/dog-api">(View the website here.)</a>
      
        </div>
      
      </div> 
      <div className="placement">
        <BreedSelect />
      </div>  



    </div>
  );
}





export default App;