import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import FoodDiary from './pages/FoodDiary';
import Profile from './pages/Profile';
import History from './pages/History';
import Exercise from './pages/Exercise';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/food-diary" element={<FoodDiary />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;