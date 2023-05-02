import './App.css';
import PersonCard from './components/Person'

function App() {
  return (
    <div className="App">
      <h1>The <br></br>Fantastic <br></br>Ericksons!</h1>

      <PersonCard
        lastName={"Erickson"}
        firstName={"Luke"}
        aka={"Dad"}
        age={42}
        initialAge={42}
        hairColor={"Balding Blonde"}
        eyeColor={"Green"}
        superPower={"Chillaxing"}/>
      
      <PersonCard
        lastName={"Erickson"}
        firstName={"Jasmine"}
        aka={"Sparklez"}
        age={39}
        initialAge={39}
        hairColor={"Dark Brown"}
        eyeColor={"Deep Brown"}
        superPower={"Prophesy"}/>
      
      <PersonCard
        lastName={"Erickson"}
        firstName={"Seth"}
        aka={"Ses"}
        age={14}
        initialAge={14}
        hairColor={"Brown"}
        eyeColor={"Hazel"}
        superPower={"Telekinesis"}/>
      
      <PersonCard
        lastName={"Erickson"}
        firstName={"Bella"}
        aka={"Bella-boo"}
        age={12}
        initialAge={12}
        hairColor={"Brown"}
        eyeColor={"Brown"}
        superPower={"Healing"}/>
      
      <PersonCard
        lastName={"Erickson"}
        firstName={"Caedryn"}
        aka={"George"}
        age={9}
        initialAge={9}
        hairColor={"Dark Brown"}
        eyeColor={"Dark Brown"}
        superPower={"Hulking Out!"}/>
      
      <PersonCard
        lastName={"Erickson"}
        firstName={"Lucy"}
        aka={"Lucy-Goose"}
        age={8}
        initialAge={8}
        hairColor={"Light Brown"}
        eyeColor={"Brown"}
        superPower={"Water Bending"}/>

      <PersonCard
        lastName={"Erickson"}
        firstName={"Jayce"}
        aka={"Jayce-Base"}
        age={6}
        initialAge={6}
        hairColor={"Bleach Blonde"}
        eyeColor={"Blue"}
        superPower={"Time Manipulation"}/>

      <PersonCard
        lastName={"Erickson"}
        firstName={"Claire"}
        aka={"Claire-Bear"}
        age={4}
        initialAge={4}
        hairColor={"Light Brown"}
        eyeColor={"Dark Brown"}
        superPower={"Telekinesis"}/>
    </div>
  );
}

export default App;
