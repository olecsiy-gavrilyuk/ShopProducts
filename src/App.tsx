import React, { FC, useEffect } from 'react';
import './styles/main.scss';
import * as productAction from "./redux/productSlice";
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';
import { useAppDispatch } from './redux/hooks';

export const App: FC = () => {  
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(productAction.getAllProducts());
  }, []);

  return (  
    <div>
        <Header />
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path ="/products/:id" element = {<DetailsPage />} />
        </Routes>
    </div>
  );
}

