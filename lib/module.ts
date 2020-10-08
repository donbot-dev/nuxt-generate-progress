import consola from 'consola';
import { Module } from '@nuxt/types';
import { intervalToDuration, formatDuration } from 'date-fns';

export const generateProgressModule: Module = function () {
  let generateBeforeDate: Date;

  this.nuxt.hook('generate:before', () => {
    generateBeforeDate = new Date();
  });

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

  this.nuxt.hook('generate:done', () => {
    const generateDoneDate = new Date();
    const generateDuration = intervalToDuration({
      start: generateBeforeDate,
      end: generateDoneDate,
    });
    const generateDurationFormatted = formatDuration(generateDuration);
    consola.info(`Generate cost – ${generateDurationFormatted}.`);
  });
};

export default generateProgressModule;
