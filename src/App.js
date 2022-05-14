import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import SymptomTracker from './pages/SymptomTracker';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<p>Homepage</p>} />
        <Route path="user/login" element={<p>Login</p>} />
        <Route path="user/symptom-tracker" element={<SymptomTracker />} />
      </Routes>
    </div>
  );
}

export default App;