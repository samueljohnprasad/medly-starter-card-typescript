import { ErrorBoundary, Header, PageLayout, SideNav } from '@components';
import { CssBaseline, ToastContainer } from '@medly-components/core';
import Routes from '@routes';
import { defaultTheme } from '@theme';
import { CartProvider } from 'contexts/cartContext/CartContext';
import { ProductsProvider } from 'contexts/productsContext/productsContext';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
const App: React.FC = () => (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Router>
            <ErrorBoundary>
                <ProductsProvider>
                    <CartProvider>
                        <PageLayout>
                            <ToastContainer position="top-end" />
                            <SideNav />
                            <Header />
                            <Routes />
                        </PageLayout>
                    </CartProvider>
                </ProductsProvider>
            </ErrorBoundary>
        </Router>
    </ThemeProvider>
);

export default App;
