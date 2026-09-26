import "./App.css";
import HobbyCard from "./HobbyCard";
import Dance from "./assets/Dance.jpg";
import garden from "./assets/garden.jpg";
import music from "./assets/music.jpg";
import photography from "./assets/photography.jpg";
import drawing from "./assets/painting.jpg";
import Reading from "./assets/Reading.jpg";

function App() {
 
  return (
    <div>
      <h1 style = {{color:"#003366"}}>Student Hobbies</h1>

      <div className="hobby-container">

        <HobbyCard
          hobbyname="Reading"
          des="Reading books during free time."
          image={Reading}
        />

        <HobbyCard
          hobbyname="Photography"
          des="Capturing beautiful moments."
          image={photography}
        />

        <HobbyCard
          hobbyname="Drawing"
          des="Creating creative drawings and sketches."
          image={drawing}
        />

        <HobbyCard
          hobbyname="Music"
          des="Listening to and playing music."
          image={music}
        />

        <HobbyCard
          hobbyname="Dancing"
          des="Enjoying different types of dance."
          image={Dance}
        />

        <HobbyCard
          hobbyname="Gardening"
          des="Growing and taking care of plants."
          image={garden}
        />

      </div>

    </div>
  );
}

export default App;
