
import './App.css';
import './index.css';
import Mainpage from './Component/Mainpage';
import Mealinfo from './Component/Mealinfo';
import { Routes,Route } from 'react-router-dom';

function App(){
  return(

<Routes>
  <Route path='/' element={<Mainpage/>}/>
  <Route path='/:mealid' element={<Mealinfo/>}/>
</Routes>

   
  );
}
export default App;