import type { RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import { AuthStatus } from '../interfaces';

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
) => {
  const authStore = useAuthStore();

  await authStore.checkAuthStatus();

  authStore.authStatus === AuthStatus.Authenticated ? { name: 'home' } : true;
};

export default isNotAuthenticatedGuard;
