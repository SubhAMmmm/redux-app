import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
//import Cart from './pages/Cart';
import Shoppage from './pages/Shoppage';
import Loginpage from './pages/Loginpage';
import Cart from './pages/Cart';
import LikedItems from './pages/LikedItems';


function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Shoppage />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Likedpage" element={<LikedItems />} />
            
     
          </>
        ) : (
          <Route path="/" element={<Loginpage />} />
        )}
        <Route path="*" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;

