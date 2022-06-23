import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Event from './pages/Event';

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/event' element={<Event />} />
    </Routes>
  );
};

export default Router;
