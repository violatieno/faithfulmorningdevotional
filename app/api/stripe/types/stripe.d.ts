// types/stripe.d.ts

import { Stripe } from 'stripe';

// Declare module augmentation for the 'stripe' package
declare module 'stripe' {
    export interface StripeConfig {
        // Here, we redefine apiVersion to accept the version we are using, 
        // in addition to any other valid string.
        apiVersion: "2024-06-20" | string;
    }
}


