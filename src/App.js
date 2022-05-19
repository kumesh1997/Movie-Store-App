import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./Components/HomePage/Home";
// import {MovieForm} from "./Components/MovieForm/MovieForm";
import {AddMovie} from "./Components/AddMovie/AddMovie";
import { Navbar } from "../src/Components/Navbar/Navbar";


function App() {
  return (
    <div class="">
     <Router>
       {/* <Navbar /> */}
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/add' element={<AddMovie />} />
       </Routes>
     </Router>
      {/* <Home />
       {/* <MovieForm /> */}
       {/* <AddMovie />  */}
     
    </div>
  );
}

export default App;
