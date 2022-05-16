import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import SymptomTracker from './pages/SymptomTracker';
import UserIssue from './pages/UserIssue';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<p>Homepage</p>} />
        <Route path="user/login" element={<p>Login</p>} />
        <Route path="user/symptom-tracker" element={<SymptomTracker />} />
        <Route path="user/:userId/issue/:issueId" element={<UserIssue />} />
      </Routes>
    </div>
  );
}

export default App;