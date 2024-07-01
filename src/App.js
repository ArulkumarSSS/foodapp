import logo from './logo.svg';
import './App.css';
import Header, { careerLoad1 } from './React Component/Header/Header';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Rootlayout from './React Component/rootlayout';
import Main from './React Component/Main/Main';
import Copy from './React Component/copy';
import Home from './React Component/home';
import MainHome, { careerLoad } from './React Component/MainHome/MainHome';
import Footer, { careerLoader } from './React Component/Footer Component/footer';
import Categorywise from './React Component/categoryWise/Categorywise';
import MidHandler from './React Component/MidHandler/MidHandler';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Header/>}/>
      <Route path='Category' element={<Footer/>}/>
      <Route path='/main' element={<Main/>}>
        
      <Route index element={<Header/>}/>
      </Route>
      <Route path="/header/:an" exact element={<MainHome/>}></Route>

      <Route path="/main/:strMeal" exact element={<Main/>}></Route>
      <Route path="/midWay/:strMeal" exact element={<MidHandler/>}></Route>
      <Route path='/Category/:strCategory' exact element={<Categorywise/>}></Route>
      </Route>
     
  ))
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
