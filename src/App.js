import { Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Home from './Home/Home';
import Portfolio from './Portfolio';
import PostList from './Posts/PostList';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/posts' element={<PostList />} />
      </Route>
    </Routes>
  );
}

export default App;
