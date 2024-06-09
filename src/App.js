import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'
import { routes } from './routes';
import { Header } from 'antd/es/layout/layout';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App


