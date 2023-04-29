import './App.css';
import NavBar from './components/navBar';
import NewsFlex from './components/newsFlex';
import { BrowserRouter,Route,Link,Routes ,Switch,withRouter} from 'react-router-dom';
import { useState } from 'react';


function App() {

  const nv=["Home","About","Entertainment","Sports","Tech","Finance"];
  const [mod,setmod]=useState(false);
  function tun(mode){
    console.log(mode);
    setmod(mode);
    return mode;
  }
  console.log(mod);
  return (
    <>
   <BrowserRouter>
      <div>
      
      
        <NavBar title="News Satyam" navv={nv} fun={tun}/>
        
        <Routes>
            <Route  path='/' element={<NewsFlex keyword={"general"} modee={mod}/>}/>
            <Route  path={`/${nv[1]}`} element={<NewsFlex  keyword={nv[1]} modee={mod}/>}/>
            <Route path={`/${nv[2]}`} element={<NewsFlex keyword={nv[2]} modee={mod}/>}/>
            <Route path={`/${nv[3]}`} element={<NewsFlex keyword={nv[3]} modee={mod}/>}/>
            <Route path={`/${nv[4]}`} element={<NewsFlex keyword={nv[4]} modee={mod}/>}/>
            <Route path={`/${nv[5]}`} element={<NewsFlex keyword={nv[5]} modee={mod}/>}/>
          </Routes>
         
        {/* <NewsFlex/> */}
        
      </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
