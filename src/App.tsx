import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loign/loginPage';
import MainPage from './pages/mainPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
