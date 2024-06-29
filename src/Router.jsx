import App from './App.jsx';
import Home from './components/Home.jsx';
import Convention from './components/Convention.jsx';
import MusicFestival from './components/MusicFestival.jsx';
import UndergroundLab from './components/UndergroundLab.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/convention', element: <Convention /> },
      {
        path: '/music-festival',
        element: <MusicFestival />,
      },
      {
        path: '/underground-lab',
        element: <UndergroundLab />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
