import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import TechnicalSeoPage from "@/pages/TechnicalSeoPage";
import VideoPage from "@/pages/VideoPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/technical-seo" element={<TechnicalSeoPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Route>
    </Routes>
  );
}
