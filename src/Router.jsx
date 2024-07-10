import App from './App.jsx';
import Home from './components/Home.jsx';
import HighScores from './components/HighScores.jsx';
import Convention from './components/Convention.jsx';
import CyberpunkCity from './components/CyberpunkCity.jsx';
import UndergroundLab from './components/UndergroundLab.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/high-scores', element: <HighScores /> },
      { path: '/convention', element: <Convention /> },
      { path: '/cyberpunk-city', element: <CyberpunkCity /> },
      { path: '/underground-lab', element: <UndergroundLab /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
