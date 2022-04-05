import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
