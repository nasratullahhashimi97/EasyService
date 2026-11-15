import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useJobs } from '../context/JobsContext'
import './JobDetails.css'

function JobDetails() {
  const { id } = useParams()

  const { jobs } = useJobs()

  // Find the selected job
  const job = jobs.find((item) => item.id === Number(id))

  // Save Job State
  const [isSaved, setIsSaved] = useState(false)
  // Proposal Form State
  const [showProposalForm, setShowProposalForm] = useState(false)
  const [coverLetter, setCoverLetter] = useState('')
  const [bidAmount, setBidAmount] = useState('')
  const [deliveryTime, setDeliveryTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Submit Proposal
  function handleProposalSubmit(event) {
    event.preventDefault()

    const proposal = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      coverLetter,
      bidAmount: Number(bidAmount),
      deliveryTime,
      submittedAt: new Date().toISOString()
    }

    // Get existing proposals
    const existingProposals = JSON.parse(
      localStorage.getItem('easyServiceProposals') || '[]'
    )

    // Add new proposal
    const updatedProposals = [...existingProposals, proposal]

    // Save proposals in localStorage
    localStorage.setItem(
      'easyServiceProposals',
      JSON.stringify(updatedProposals)
    )

    // Reset form
    setSubmitted(true)
    setShowProposalForm(false)
    setCoverLetter('')
    setBidAmount('')
    setDeliveryTime('')
  }

  // Job not found
  if (!job) {
    return (
      <div className="job-details-page">
        <div className="job-not-found">
          <h1>Job Not Found</h1>
          <p>This job does not exist or may have been removed.</p>

          <Link to="/find-work">
            Back to Find Work
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="job-details-page">

      {/* Job Header */}
      <div className="job-details-header">
        <div>
          <span className="job-category">{job.category}</span>

          <h1>{job.title}</h1>

          <p>
            Posted {job.time} · {job.location}
          </p>
        </div>

        <button
          className={`save-job-btn ${isSaved ? 'saved' : ''}`}
          onClick={() => setIsSaved(!isSaved)}
        >
          {isSaved ? '✓ Saved' : '♡ Save Job'}
        </button>
      </div>

      {/* Job Description */}
      <div className="job-description-section">
        <h2>Job Description</h2>

        <p>{job.fullDescription}</p>

        <h3>Responsibilities</h3>

        <ul>
          {job.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Required Skills */}
      <div className="required-skills-section">
        <h2>Required Skills</h2>

        <div className="skills-list">
          {job.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Job Information */}
      <div className="job-information-section">
        <h2>Job Information</h2>

        <div className="job-information-grid">
          <div className="information-item">
            <span>Budget</span>
            <h3>${job.budget}</h3>
          </div>

          <div className="information-item">
            <span>Job Type</span>
            <h3>{job.type}</h3>
          </div>

          <div className="information-item">
            <span>Experience Level</span>
            <h3>{job.experience}</h3>
          </div>

          <div className="information-item">
            <span>Project Duration</span>
            <h3>{job.duration}</h3>
          </div>

          <div className="information-item">
            <span>Proposals Received</span>
            <h3>{job.proposals} Proposals</h3>
          </div>

          <div className="information-item">
            <span>Location</span>
            <h3>{job.location}</h3>
          </div>
        </div>
      </div>

      {/* Client Information */}
      <div className="client-information-section">
        <h2>About the Client</h2>

        <div className="client-profile">
          <div className="client-avatar">
            {job.client.initials}
          </div>

          <div className="client-details">
            <h3>{job.client.name}</h3>
            <p>{job.client.country}</p>
          </div>
        </div>

        <div className="client-stats">
          <div>
            <span>Rating</span>
            <h3>{job.client.rating}</h3>
          </div>

          <div>
            <span>Total Jobs</span>
            <h3>{job.client.totalJobs} Jobs</h3>
          </div>

          <div>
            <span>Member Since</span>
            <h3>{job.client.memberSince}</h3>
          </div>
        </div>
      </div>

      {/* Apply Section */}
      <div className="apply-job-section">
        <div className="apply-job-content">
          <h2>Interested in this Job?</h2>

          <p>
            Submit your proposal and tell the client
            why you are the right person for this project.
          </p>
        </div>

        <button
          className="apply-now-btn"
          onClick={() => {
            setShowProposalForm(!showProposalForm)
            setSubmitted(false)
          }}
        >
          {showProposalForm ? 'Close Form' : 'Apply Now'}
        </button>
      </div>

      {/* Proposal Form */}
      {showProposalForm && (
        <div className="proposal-form-section">
          <h2>Submit Your Proposal</h2>

          <p className="proposal-intro">
            Explain why you are suitable for this job.
          </p>

          <form onSubmit={handleProposalSubmit}>
            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter</label>

              <textarea
                id="coverLetter"
                value={coverLetter}
                onChange={(event) => setCoverLetter(event.target.value)}
                placeholder="Introduce yourself and explain how you can complete this project..."
                rows="7"
                required
              />
            </div>

            <div className="proposal-form-grid">
              <div className="form-group">
                <label htmlFor="bidAmount">Your Bid ($)</label>

                <input
                  id="bidAmount"
                  type="number"
                  min="1"
                  value={bidAmount}
                  onChange={(event) => setBidAmount(event.target.value)}
                  placeholder="Example: 250"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="deliveryTime">Delivery Time</label>

                <select
                  id="deliveryTime"
                  value={deliveryTime}
                  onChange={(event) => setDeliveryTime(event.target.value)}
                  required
                >
                  <option value="">Select delivery time</option>
                  <option value="1 week">1 Week</option>
                  <option value="2 weeks">2 Weeks</option>
                  <option value="1 month">1 Month</option>
                  <option value="2 months">2 Months</option>
                  <option value="3 months">3 Months</option>
                </select>
              </div>
            </div>

            <button type="submit" className="submit-proposal-btn">
              Submit Proposal
            </button>
          </form>
        </div>
      )}

      {/* Proposal Success */}
      {submitted && (
        <div className="proposal-success">
          <span>✓</span>

          <div>
            <h3>Proposal Saved Successfully!</h3>
            <p>
              Your proposal has been saved in this browser.
              It has not yet been sent to the client.
            </p>
          </div>
        </div>
      )}

      <Link to="/find-work" className="back-to-jobs">
        ← Back to Find Work
      </Link>

    </div>
  )
}

export default JobDetails
