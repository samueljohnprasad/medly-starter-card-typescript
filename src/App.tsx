import { ErrorBoundary, Header, PageLayout, SideNav } from '@components';
import { CssBaseline, ToastContainer } from '@medly-components/core';
import Routes from '@routes';
import { defaultTheme } from '@theme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Card from './components/layout/Card/Card';
import createGlobalStyle from './components/layout/Card/globalStyles';
import { theme } from 'components/layout/Card/theme';
const App: React.FC = () => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <Router>
                <ErrorBoundary>
                    <PageLayout>
                        <ToastContainer position="top-end" />
                        <SideNav />
                        <ThemeProvider theme={theme}>
                            <Card />
                        </ThemeProvider>

                        <Routes />
                    </PageLayout>
                </ErrorBoundary>
            </Router>
        </>
    </ThemeProvider>
);

export default App;
