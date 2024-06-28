import App from './App.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [],
    errorElement: <ErrorPage />,
  },
];

export default routes;
