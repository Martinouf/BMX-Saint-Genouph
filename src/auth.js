import createAuth0Client from '@auth0/auth0-spa-js';

let auth0Client;

const config = {
  domain: 'dev-gn0zse2lyuwgklxy.eu.auth0.com', // Votre domaine Auth0
  client_id: 'yOsx3wMJ3iZLeCyPYPhtzcl029fsCs7P', // ID de votre client Auth0
  redirect_uri: process.env.NODE_ENV === 'production' 
    ? 'https://bmx-saint-genouph.netlify.app/callback' // URL déployé
    : 'http://localhost:8080/callback' // URL local
};

export const initAuth0 = async () => {
  auth0Client = await createAuth0Client(config);
};

export const login = async () => {
  await auth0Client.loginWithRedirect();
};

export const logout = () => {
  auth0Client.logout({ 
    returnTo: process.env.NODE_ENV === 'production' 
      ? 'https://bmx-saint-genouph.netlify.app' // URL déployé
      : 'http://localhost:8080' // URL local
  });
};

export const isAuthenticated = async () => {
  return await auth0Client.isAuthenticated();
};

export const getUser = async () => {
  return await auth0Client.getUser();
};

export const handleRedirectCallback = async () => {
  return await auth0Client.handleRedirectCallback();
};

export const getToken = async () => {
  return await auth0Client.getTokenSilently();
};
