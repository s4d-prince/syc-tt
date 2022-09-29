import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from '../../shared/utils';
import { useAppSelector } from '../../store';

export const ContactsPage = () => {
    const navigate = useNavigate();
    const { isAuthed } = useAppSelector((state) => state.auth.user);

    useEffect(() => {
        if (!isAuthed) navigate(`${Routes.AuthMain}${Routes.Auth}`);
    }, [navigate, isAuthed]);

    return <Box>Contacts Initial</Box>;
};
