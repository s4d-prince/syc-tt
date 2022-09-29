import { AppBar, Box, Button, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

import { BRAND_NAME, Routes } from '../../shared/utils';
import { useAppSelector } from '../../store';

const SIGN_IN_TEXT = 'Sign In';
const SIGN_OUT_TEXT = 'Sign Out';

const Navigation = () => {
    const { isAuthed, username } = useAppSelector((state) => state.auth.user);

    return (
        <Box component="nav" sx={{ backgroundColor: grey[700], mb: 4 }}>
            <Container maxWidth="lg">
                <AppBar
                    sx={{
                        boxShadow: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        backgroundColor: grey[700],
                        py: 1,
                    }}
                    position={'static'}
                >
                    <Typography variant="h5">{BRAND_NAME}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {isAuthed && <Typography variant="body1">{username}</Typography>}
                        <Button
                            component={Link}
                            to={isAuthed ? Routes.LogOut : '/auth' + Routes.Auth}
                            variant="contained"
                            color="secondary"
                        >
                            {isAuthed ? SIGN_OUT_TEXT : SIGN_IN_TEXT}
                        </Button>
                    </Box>
                </AppBar>
            </Container>
        </Box>
    );
};

export default Navigation;
