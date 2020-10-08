import consola from 'consola';
import { Module } from '@nuxt/types';

export const generateProgressModule: Module = function () {
  // TODO: remove "any" typings after they appear in @nuxt/types
  this.nuxt.hook('generate:extendRoutes', (routes: any[]) => {
    const routesTotal = routes.length;
    let currentRoute = 0;

    this.nuxt.hook(
      'generate:routeCreated',
      ({ route, errors }: { route: string; errors: any[] }) => {
        if (!errors.length) {
          consola.success(
            `(${++currentRoute}/${routesTotal}) Generated ${route}`,
          );
        }
      },
    );
  });
};
