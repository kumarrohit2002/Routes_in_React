import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Labs from './components/Labs';
import Support from './components/Support';
import About from './components/About';
import { NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <div className="flex flex-row  items-center bg-blue-500 
       text-white justify-center gap-10 p-2 text-2xl font-semibold">
        <div><NavLink to={'/'}>Home</NavLink></div>
        <div><NavLink to={'/support'}>Support</NavLink></div>
        <div><NavLink to={'/about'}>About</NavLink></div>
        <div><NavLink to={'/labs'}>Labs</NavLink></div>
      </div>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          {/* Default route */}
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="*" element={<div className="text-center text-3xl p-5">Not Found Page</div>}/>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
