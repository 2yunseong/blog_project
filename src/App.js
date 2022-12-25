import { Route, Routes } from 'react-router-dom';

import Layout from './Layouts/Layout';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import PostList from './Posts/PostList';
import Write from './Write/Write';
import Post from './Post/Post';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/posts' element={<PostList />} />
        <Route path='/write' element={<Write />} />
        <Route path='/post' element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
