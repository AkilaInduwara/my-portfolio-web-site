import '../src/CSS/App.css';
import './CSS/poppins.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


function App() {
  return (
   <>
   <Header />

   <main className='main'>
    <Home />
   </main>
   
   </>
  );
}

export default App;
