import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import OnboardingDatePicker from './pages/OnboardingDatePicker'
import OnboardingCycleLength from './pages/OnboardingCycleLength'
import DailyStarCard from './pages/DailyStarCard'
import Chat from './pages/Chat'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding/date" replace />} />
        <Route path="/onboarding/date" element={<OnboardingDatePicker />} />
        <Route path="/onboarding/cycle" element={<OnboardingCycleLength />} />
        <Route path="/daily-star" element={<DailyStarCard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App

