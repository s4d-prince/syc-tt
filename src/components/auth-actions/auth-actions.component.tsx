import { Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../shared/utils';

const SIGN_IN_TEXT = 'Sign In';
const SIGN_UP_TEXT = 'Sign Up';
const HAVE_PROFILE_TEXT = 'Do you already have a profile?';
const NO_PROFILE_TEXT = "Don't you have a profile?";

interface ActionsProps {
    forUrl: Routes;
}

const AuthActions = ({ forUrl }: ActionsProps) => {
    const PATH_CONDITION = forUrl.includes(Routes.Registration);

    return (
        <>
            <Button variant="contained" color={PATH_CONDITION ? 'secondary' : 'primary'}>
                {PATH_CONDITION ? SIGN_UP_TEXT : SIGN_IN_TEXT}
            </Button>
            <Stack spacing={1}>
                <Typography color={grey[800]} variant="body2">
                    {PATH_CONDITION ? HAVE_PROFILE_TEXT : NO_PROFILE_TEXT}
                </Typography>
                <Button
                    component={Link}
                    to={`${Routes.AuthMain}${PATH_CONDITION ? Routes.Auth : Routes.Registration}`}
                    variant="contained"
                    color={PATH_CONDITION ? 'primary' : 'secondary'}
                >
                    {PATH_CONDITION ? SIGN_IN_TEXT : SIGN_UP_TEXT}
                </Button>
            </Stack>
        </>
    );
};

export default AuthActions;
