import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Items} from 'screens/Items';
import {Categories} from 'screens/Categories';
export const App = () => {
  return (<>
    <Routes>
      dsfs
      <Route path='/' element={<Items />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  </>);
};
