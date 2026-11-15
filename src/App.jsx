import Auth from './pages/Auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import Navbar from './components/Navbar'

// Pages
import FindTalent from './pages/FindTalent'
import FindWork from './pages/FindWork'
import JobDetails from './pages/JobDetails'
import SavedJobs from './pages/SavedJobs'
import FreelancerProfile from './pages/FreelancerProfile'
import MyProposals from './pages/MyProposals'
import PostJob from './pages/PostJob'

// Context
import { SavedJobsProvider } from './context/SavedJobsContext'
import { JobsProvider } from './context/JobsContext'

// CSS
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <SavedJobsProvider>
        <JobsProvider>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/find-work" element={<FindWork />} />

            <Route path="/find-talent" element={<FindTalent />} />
<Route path="/login" element={<Auth />} />

<Route path="/signup" element={<Auth />} />
            <Route
              path="/freelancer/:id"
              element={<FreelancerProfile />}
            />

            <Route path="/job-details/:id" element={<JobDetails />} />

            <Route path="/saved-jobs" element={<SavedJobs />} />

            <Route path="/my-proposals" element={<MyProposals />} />

            <Route path="/post-job" element={<PostJob />} />
          </Routes>

        </JobsProvider>
      </SavedJobsProvider>
    </BrowserRouter>
  )
}

export default App
