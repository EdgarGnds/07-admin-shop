import type { RouteLocationNormalized } from 'vue-router';
import { AuthStatus } from '../interfaces';
import { useAuthStore } from '../stores/auth.store';

const isAuthenticatedGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const authStore = useAuthStore();

  await authStore.checkAuthStatus();

  return authStore.authStatus === AuthStatus.UnAuthenticated ? { name: 'home' } : true;
};

export default isAuthenticatedGuard;
