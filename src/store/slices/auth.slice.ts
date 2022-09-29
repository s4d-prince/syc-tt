import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthenticationInputFields {
    login: string;
    password: string;
}

export interface RegistrationInputFields {
    login: string;
    username?: string;
    password: string;
    repPassword: string;
}

export interface UserInterface {
    login: string;
    username?: string;
    isAuthed: boolean;
}

export interface AuthSliceState {
    authForm: AuthenticationInputFields;
    regForm: RegistrationInputFields;
    user: UserInterface;
}

const initialState: AuthSliceState = {
    authForm: {
        login: '',
        password: '',
    },
    regForm: {
        login: '',
        username: '',
        password: '',
        repPassword: '',
    },
    user: {
        login: '',
        username: '',
        isAuthed: false,
    },
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthLogin: (state, { payload }: PayloadAction<string>) => {
            state.authForm.login = payload;
        },
        setAuthPassword: (state, { payload }: PayloadAction<string>) => {
            state.regForm.password = payload;
        },
        setRegLogin: (state, { payload }: PayloadAction<string>) => {
            state.regForm.login = payload;
        },
        setRegUsername: (state, { payload }: PayloadAction<string>) => {
            state.regForm.username = payload;
        },
        setRegPassword: (state, { payload }: PayloadAction<string>) => {
            state.regForm.password = payload;
        },
        setRegRepPassword: (state, { payload }: PayloadAction<string>) => {
            state.regForm.repPassword = payload;
        },
    },
});

export const { setRegLogin, setRegUsername, setRegPassword, setRegRepPassword, setAuthLogin, setAuthPassword } =
    AuthSlice.actions;

export default AuthSlice;
