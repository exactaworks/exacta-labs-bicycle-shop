import routes from './routes.js';

const init = async () => {
  const { pathname } = window.location;

  await import(routes[pathname]);
};

init();
