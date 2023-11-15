import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/Home';
import { CompleteOrderPage } from './pages/CompleteOrder';
import { DefaultLayout } from './layouts/DefaultLayout';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  );
}

export { Router };
