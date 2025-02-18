import { get } from 'svelte/store';
import { persistStore } from '$lib/stores/persist-store';

export const authUser = persistStore<User>('AuthUser', {});

export const getAuthUser = (): User => get(authUser);

export const setAuthUser = (user: User) => {
  const { accessToken, idToken, name, email, picture } = user;

  if (!accessToken || accessToken == '{{.AccessToken}}') {
    throw new Error('No access token');
  }

  authUser.set({
    accessToken,
    idToken,
    name,
    email,
    picture,
  });
};

export const clearAuthUser = () => {
  authUser.set({});
};
