import { Stack, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import React, { memo } from 'react';

import { AnimationsVariantsNames, AuthLabels, DEFAULT_APP_SPACING, FORM_VARIANTS, Routes } from '../../shared/utils';
import { useAppDispatch, useAppSelector } from '../../store';
import { setAuthLogin, setAuthPassword } from '../../store/slices';
import AuthActions from '../auth-actions/auth-actions.component';
import styles from './form.module.scss';

const AuthenticationForm = () => {
    const dispatch = useAppDispatch();

    const { login, password } = useAppSelector((state) => state.auth.authForm);

    return (
        <motion.div
            initial={AnimationsVariantsNames.Initial}
            animate={AnimationsVariantsNames.Animate}
            exit={AnimationsVariantsNames.Exit}
            variants={FORM_VARIANTS}
        >
            <Stack className={styles.form} spacing={DEFAULT_APP_SPACING}>
                <TextField
                    color="primary"
                    value={login}
                    required
                    label={AuthLabels.Login}
                    onChange={(e) => dispatch(setAuthLogin(e.target.value))}
                    variant="outlined"
                />
                <TextField
                    color="primary"
                    value={password}
                    required
                    type="password"
                    label={AuthLabels.Password}
                    onChange={(e) => dispatch(setAuthPassword(e.target.value))}
                    variant="outlined"
                />
                <AuthActions forUrl={Routes.Auth} />
            </Stack>
        </motion.div>
    );
};

export const MAuthenticationForm = memo(AuthenticationForm);
