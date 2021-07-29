import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/Dashboard'));
const CartDashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/CartDashboard'));
export const Routes: React.FC = () => (
    <Suspense fallback={<span>Loading ...</span>}>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/cart" component={CartDashboard} />
        </Switch>
    </Suspense>
);
