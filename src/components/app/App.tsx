import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AuthLayout, ContactsPage, NotFoundPage } from '../../pages';
import { AnimationsVariantsNames, Routes as AppRoutes, NAV_TRANSITION, NAV_VARIANTS } from '../../shared/utils';
import { MAuthenticationForm } from '../auth-forms/authentication-form.component';
import { MRegistrationForm } from '../auth-forms/registration-form.component';
import Navigation from '../navigation';

const AppTheme = createTheme({
    palette: {
        primary: {
            main: '#5050BD',
        },
        secondary: {
            main: '#9F4FB3',
        },
    },
});

const App: FC = () => {
    const { pathname } = useLocation();

    return (
        <ThemeProvider theme={AppTheme}>
            <Box sx={{ backgroundColor: '#F0F0F0', minHeight: '100vh' }}>
                <AnimatePresence mode="wait">
                    {!pathname.includes('/auth') && (
                        <motion.div
                            variants={NAV_VARIANTS}
                            transition={NAV_TRANSITION}
                            initial={AnimationsVariantsNames.Initial}
                            animate={AnimationsVariantsNames.Animate}
                            exit={AnimationsVariantsNames.Exit}
                        >
                            <Navigation />
                        </motion.div>
                    )}
                </AnimatePresence>
                <Routes>
                    <Route
                        index
                        element={
                            <Container maxWidth="lg">
                                <ContactsPage />
                            </Container>
                        }
                    />
                    <Route path={AppRoutes.AuthMain} element={<AuthLayout />}>
                        <Route path={`${AppRoutes.AuthMain}${AppRoutes.Auth}`} element={<MAuthenticationForm />} />
                        <Route
                            path={`${AppRoutes.AuthMain}${AppRoutes.Registration}`}
                            element={<MRegistrationForm />}
                        />
                        <Route path={'*'} element={<NotFoundPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Box>
        </ThemeProvider>
    );
};

export default App;
