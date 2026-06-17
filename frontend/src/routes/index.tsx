import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import AppLayout from '../layouts/AppLayout/AppLayout';

import HomePage from '../pages/HomePage/HomePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default AppRouter;