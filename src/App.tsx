import React, { FC } from 'react';
import './styles/main.scss';
import app from './App.module.scss';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

export const App: FC = () => {  
  return (
    <div className={app.app}>
        <Header />
        <ProductList />
    </div>
  );
}

