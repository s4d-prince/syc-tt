/* eslint-disable no-unused-vars */
import { Transition, Variants } from 'framer-motion';

export enum TimeConstants {
    SECOND = 1000,
    MINUTE = TimeConstants.SECOND * 60,
    HOUR = TimeConstants.MINUTE * 60,
    DAY = TimeConstants.HOUR * 24,
    WEEK = TimeConstants.DAY * 7,
}

export enum AuthFormPaths {
    REGISTRATION = 'registration',
    AUTHENTICATION = 'authentication',
}

export enum AnimationsVariantsNames {
    Initial = 'initial',
    Animate = 'animate',
    Exit = 'exit',
    InView = 'inView',
    Tap = 'tap',
}

// Animations

export const NAV_TRANSITION: Transition = {
    type: 'spring',
    stiffness: 240,
    damping: 8,
    mass: 2,
};

export const NAV_VARIANTS: Variants = {
    [AnimationsVariantsNames.Initial]: {
        y: '-100%',
        opacity: 0,
    },
    [AnimationsVariantsNames.Animate]: {
        y: 0,
        opacity: 1,
    },
    [AnimationsVariantsNames.Exit]: {
        y: '-100%',
        opacity: 0,
    },
};

const FORM_VARIANTS_TRANSITION: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
    mass: 1,
};

export const FORM_VARIANTS: Variants = {
    [AnimationsVariantsNames.Initial]: {
        opacity: 0,
        scaleY: 0,
        transition: FORM_VARIANTS_TRANSITION,
    },
    [AnimationsVariantsNames.Animate]: {
        opacity: 1,
        scaleY: 1,
        transition: FORM_VARIANTS_TRANSITION,
    },
    [AnimationsVariantsNames.Exit]: {
        opacity: 0,
        scaleY: 0,
        transition: FORM_VARIANTS_TRANSITION,
    },
};

export enum AuthLabels {
    Login = 'Login',
    Username = 'Username',
    Password = 'Password',
    RepPassword = 'Repeat password',
}

export const DEFAULT_APP_SPACING = 2;

export const BRAND_NAME = 'Contacts';
