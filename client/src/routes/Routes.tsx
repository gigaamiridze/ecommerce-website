import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Home, Cart, Login, Product } from '../pages';
import { PageRoutes } from '../constants';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PageRoutes.ROOT} Component={Root}>
      <Route index Component={Home} />
      <Route path={PageRoutes.CART} Component={Cart} />
      <Route path={PageRoutes.LOGIN} Component={Login} />
      <Route path={`${PageRoutes.PRODUCT}/:productId`} Component={Product} />
    </Route>
  )
);
