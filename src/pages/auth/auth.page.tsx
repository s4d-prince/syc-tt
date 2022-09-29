import { Box, Stack, Typography } from '@mui/material';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import AnimatedCounter from '../../shared/components/animated-counter';
import { Routes as AppRoutes, BRAND_NAME, DEFAULT_APP_SPACING, TimeConstants } from '../../shared/utils';
import { useAppSelector } from '../../store';

const SECONDS_TO_REDIRECT = 5;
const TIMEOUT_TO_REDIRECT_AUTHED_USER = TimeConstants.SECOND * SECONDS_TO_REDIRECT;

export const AuthLayout = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { isAuthed, username } = useAppSelector((state) => state.auth.user);

    // Redirecting Authed user after delay
    useEffect(() => {
        isAuthed && setTimeout(() => navigate('/'), TIMEOUT_TO_REDIRECT_AUTHED_USER);
    }, [navigate, isAuthed]);

    return (
        <motion.div
            className="authWrapper"
            initial={{ backgroundColor: 'rgb(255, 255, 255)' }}
            animate={{
                background: `linear-gradient(107.56deg, ${
                    pathname.includes(AppRoutes.Auth) ? 'rgb(154, 154, 254)' : 'rgb(253, 155, 237)'
                } 0%, ${pathname.includes(AppRoutes.Auth) ? 'rgb(0, 0, 119)' : 'rgb(60, 0, 119)'} 100%)`,
            }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            {!isAuthed ? (
                <AnimateSharedLayout>
                    <motion.div layout>
                        <Stack spacing={DEFAULT_APP_SPACING * 2}>
                            <motion.span layout style={{ width: '100%', textAlign: 'center' }}>
                                <Typography component="span" color="white" textAlign="center" variant="h4">
                                    {BRAND_NAME.toUpperCase()}
                                </Typography>
                            </motion.span>
                            <AnimatePresence mode="wait" initial={false}>
                                <Outlet />
                            </AnimatePresence>
                        </Stack>
                    </motion.div>
                </AnimateSharedLayout>
            ) : (
                <Box sx={{ p: 4, borderRadius: 2, backgroundColor: 'white' }}>
                    <Stack spacing={DEFAULT_APP_SPACING}>
                        <Typography variant="h5">Welcome back, {username}!</Typography>
                        <Typography variant="body1">
                            You will be automatically redirected to contacts page after{' '}
                            <AnimatedCounter from={SECONDS_TO_REDIRECT} to={0} duration={SECONDS_TO_REDIRECT} />{' '}
                            seconds...
                        </Typography>
                    </Stack>
                </Box>
            )}
        </motion.div>
    );
};
