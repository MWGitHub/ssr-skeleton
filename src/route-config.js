import Home from './components/Home';
import NotFound from './components/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    component: NotFound
  }
];

export default routes;
