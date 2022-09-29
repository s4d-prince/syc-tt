import { Stack, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import React, { memo } from 'react';

import { AnimationsVariantsNames, AuthLabels, DEFAULT_APP_SPACING, FORM_VARIANTS, Routes } from '../../shared/utils';
import { useAppDispatch, useAppSelector } from '../../store';
import { setRegLogin, setRegPassword, setRegRepPassword, setRegUsername } from '../../store/slices';
import AuthActions from '../auth-actions/auth-actions.component';
import styles from './form.module.scss';

const RegistrationForm = () => {
    const dispatch = useAppDispatch();

    const { login, username, password, repPassword } = useAppSelector((state) => state.auth.regForm);

    return (
        <motion.div
            initial={AnimationsVariantsNames.Initial}
            animate={AnimationsVariantsNames.Animate}
            exit={AnimationsVariantsNames.Exit}
            variants={FORM_VARIANTS}
        >
            <Stack className={styles.form} spacing={DEFAULT_APP_SPACING}>
                <TextField
                    color="secondary"
                    value={login}
                    required
                    label={AuthLabels.Login}
                    onChange={(e) => dispatch(setRegLogin(e.target.value))}
                    variant="outlined"
                />
                <TextField
                    color="secondary"
                    value={username}
                    label={AuthLabels.Username}
                    onChange={(e) => dispatch(setRegUsername(e.target.value))}
                    variant="outlined"
                />
                <TextField
                    color="secondary"
                    value={password}
                    required
                    type="password"
                    label={AuthLabels.Password}
                    onChange={(e) => dispatch(setRegPassword(e.target.value))}
                    variant="outlined"
                />
                <TextField
                    color="secondary"
                    value={repPassword}
                    required
                    type="password"
                    label={AuthLabels.RepPassword}
                    onChange={(e) => dispatch(setRegRepPassword(e.target.value))}
                    variant="outlined"
                />
                <AuthActions forUrl={Routes.Registration} />
            </Stack>
        </motion.div>
    );
};

export const MRegistrationForm = memo(RegistrationForm);
