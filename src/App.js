import Frontend from "./components/Frontend";
import Header  from "./components/Header";
import Skill from "./components/Skill";
import Project from './components/Project';
import ProblemSloving from "./components/ProblemSloving";
import Certificate from "./components/Certificate";
import Fotter from "./components/Fotter"
function App() {
  return (
  
    <>
    <Header/>
    <div className="container">
    <Frontend/>
    <Skill/>
    <Project/>
    <ProblemSloving/>
    <Certificate/>
    <Fotter/>
    </div>
    </>
  );
}

export default App;
