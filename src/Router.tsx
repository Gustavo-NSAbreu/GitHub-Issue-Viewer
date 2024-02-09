import { Routes, Route } from 'react-router-dom';
import { routes } from './config/routes.ts';
import DefaultLayout from './layouts/DefaultLayout/index.tsx';
import Issue from './pages/Issue';
import Home from './pages/Home/index.tsx';

export default function Router() {
  return (
    <Routes>
      <Route
        path={routes.HOME}
        element={<DefaultLayout />}
      >
        <Route
          path={routes.HOME}
          element={<Home />}
        ></Route>
        <Route
          path={routes.ISSUE}
          element={<Issue />}
        ></Route>
      </Route>
    </Routes>
  );
}