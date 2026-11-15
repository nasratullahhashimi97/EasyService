
import { Link } from 'react-router-dom'
import { useSavedJobs } from '../context/SavedJobsContext'
import './SavedJobs.css'

function SavedJobs() {
  const { savedJobs, toggleSavedJob } = useSavedJobs()

  return (
    <div className="saved-jobs-page">

      <div className="saved-jobs-header">
        <h1>Saved Jobs</h1>
        <p>Your favorite opportunities, all in one place.</p>
        <span>{savedJobs.length} Saved Jobs</span>
      </div>

      {savedJobs.length > 0 ? (
        <div className="saved-jobs-list">

          {savedJobs.map((job) => (
            <div className="saved-job-card" key={job.id}>

              <span className="job-category">
                {job.category}
              </span>

              <h2>{job.title}</h2>

              <p>{job.description}</p>

              <div className="saved-job-skills">
                {job.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="saved-job-bottom">
                <div>
                  <strong>${job.budget}</strong>
                  <small>{job.type}</small>
                </div>

                <div className="saved-job-actions">
                  <Link to={`/job-details/${job.id}`}>
                    View Job
                  </Link>

                  <button
                    onClick={() => toggleSavedJob(job)}
                  >
                    Remove
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      ) : (
        <div className="empty-saved-jobs">
          <div>♡</div>
          <h2>No Saved Jobs Yet</h2>
          <p>
            Save interesting jobs and they will appear here.
          </p>

          <Link to="/find-work">
            Browse Jobs
          </Link>
        </div>
      )}

    </div>
  )
}

export default SavedJobs
