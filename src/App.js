import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Home';
import Portfolio from './Portfolio';
import Techs from './Techs';
import Activities from './Activities';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/tech' element={<Techs />} />
        <Route path='/activity' element={<Activities />} />
      </Route>
    </Routes>
  );
}

export default App;
