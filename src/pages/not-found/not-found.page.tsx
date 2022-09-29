import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <Container sx={{ backgroundColor: '#FFFFFF' }} maxWidth="lg">
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 2,
                }}
            >
                <Stack maxWidth="250px" alignItems="center">
                    <Typography variant="h4">Page not found</Typography>
                    <Button color="secondary" component={Link} to="/">
                        Go back
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};
