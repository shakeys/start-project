import { MsalAuthProvider, LoginType } from 'react-aad-msal';

export const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority: "https://login.microsoftonline.com/common",
            clientId: "4f286b75-40f2-4b8e-b9a4-1ca9e4fbc79d" //Application (client) ID from Overview blade in App Registration
        },
        cache: {
            cacheLocation: 'sessionStorage',
            storeAuthStateInCookie: true,
        },
    },
    {
        scopes: ['user.read','mail.read']
    },

    LoginType.Popup
);