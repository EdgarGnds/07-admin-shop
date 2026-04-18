import type { RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

const isAdminGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const authStore = useAuthStore();

  await authStore.checkAuthStatus();

  return authStore.isAdmin ? true : { name: 'home' };
};

export default isAdminGuard;
