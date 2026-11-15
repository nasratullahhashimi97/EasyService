
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Trash2,
  BriefcaseBusiness
} from 'lucide-react'
import './MyProposals.css'

function MyProposals() {
  const [proposals, setProposals] = useState([])
  const [activeTab, setActiveTab] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const storedProposals = JSON.parse(
      localStorage.getItem('easyServiceProposals') || '[]'
    )

    setProposals(storedProposals)
  }, [])

  function withdrawProposal(id) {
    const confirmed = window.confirm(
      'Are you sure you want to withdraw this proposal?'
    )

    if (!confirmed) return

    const updatedProposals = proposals.filter(
      (proposal) => proposal.id !== id
    )

    localStorage.setItem(
      'easyServiceProposals',
      JSON.stringify(updatedProposals)
    )

    setProposals(updatedProposals)
  }

  const getStatus = (proposal) => proposal.status || 'Pending'

  const pendingCount = proposals.filter(
    (proposal) => getStatus(proposal) === 'Pending'
  ).length

  const acceptedCount = proposals.filter(
    (proposal) => getStatus(proposal) === 'Accepted'
  ).length

  const declinedCount = proposals.filter(
    (proposal) => getStatus(proposal) === 'Declined'
  ).length

  const filteredProposals = proposals.filter((proposal) => {
    const matchesTab =
      activeTab === 'All' || getStatus(proposal) === activeTab

    const matchesSearch = proposal.jobTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    return matchesTab && matchesSearch
  })

  function formatDate(date) {
    if (!date) return 'Date unavailable'

    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="my-proposals-page">

      <div className="proposals-header">
        <div>
          <span className="proposals-eyebrow">FREELANCER WORKSPACE</span>
          <h1>My Proposals</h1>
          <p>
            Track and manage all your submitted job proposals.
          </p>
        </div>

        <Link to="/find-work" className="browse-jobs-btn">
          <BriefcaseBusiness size={18} />
          Find More Jobs
        </Link>
      </div>

      {/* Statistics */}
      <div className="proposal-stats">

        <div className="proposal-stat-card">
          <div className="stat-icon blue">
            <FileText size={22} />
          </div>
          <div>
            <span>Total Proposals</span>
            <h2>{proposals.length}</h2>
          </div>
        </div>

        <div className="proposal-stat-card">
          <div className="stat-icon orange">
            <Clock size={22} />
          </div>
          <div>
            <span>Pending</span>
            <h2>{pendingCount}</h2>
          </div>
        </div>

        <div className="proposal-stat-card">
          <div className="stat-icon green">
            <CheckCircle size={22} />
          </div>
          <div>
            <span>Accepted</span>
            <h2>{acceptedCount}</h2>
          </div>
        </div>

        <div className="proposal-stat-card">
          <div className="stat-icon red">
            <XCircle size={22} />
          </div>
          <div>
            <span>Declined</span>
            <h2>{declinedCount}</h2>
          </div>
        </div>

      </div>

      {/* Proposals Content */}
      <div className="proposals-content">

        <div className="proposals-toolbar">
          <div>
            <h2>Submitted Proposals</h2>
            <p>Review your applications and their current status.</p>
          </div>

          <div className="proposal-search">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search proposals..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="proposal-tabs">
          {['All', 'Pending', 'Accepted', 'Declined'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === 'All' && (
                <span>{proposals.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Proposal List */}
        <div className="proposal-list">

          {filteredProposals.length > 0 ? (
            filteredProposals.map((proposal) => {
              const status = getStatus(proposal)

              return (
                <div className="proposal-card" key={proposal.id}>

                  <div className="proposal-card-top">
                    <div className="proposal-job-icon">
                      <BriefcaseBusiness size={22} />
                    </div>

                    <div className="proposal-job-info">
                      <h3>{proposal.jobTitle}</h3>
                      <span>
                        Submitted {formatDate(proposal.submittedAt)}
                      </span>
                    </div>

                    <span className={`proposal-status ${status.toLowerCase()}`}>
                      {status}
                    </span>
                  </div>

                  <div className="proposal-details">
                    <div>
                      <span>Your Bid</span>
                      <strong>${proposal.bidAmount}</strong>
                    </div>

                    <div>
                      <span>Delivery Time</span>
                      <strong>{proposal.deliveryTime}</strong>
                    </div>

                    <div>
                      <span>Proposal ID</span>
                      <strong>#{proposal.id}</strong>
                    </div>
                  </div>

                  <div className="proposal-cover-letter">
                    <span>Cover Letter</span>
                    <p>{proposal.coverLetter}</p>
                  </div>

                  <div className="proposal-card-footer">
                    <Link
                      to={`/job-details/${proposal.jobId}`}
                      className="view-job-link"
                    >
                      <Eye size={17} />
                      View Job
                    </Link>

                    {status === 'Pending' && (
                      <button
                        className="withdraw-btn"
                        onClick={() => withdrawProposal(proposal.id)}
                      >
                        <Trash2 size={16} />
                        Withdraw
                      </button>
                    )}
                  </div>

                </div>
              )
            })
          ) : (
            <div className="proposals-empty">
              <div className="empty-icon">
                <FileText size={34} />
              </div>

              <h3>No proposals found</h3>

              <p>
                {proposals.length === 0
                  ? 'You have not submitted any proposals yet. Start exploring jobs and send your first proposal.'
                  : 'No proposals match your current search or filter.'}
              </p>

              {proposals.length === 0 && (
                <Link to="/find-work" className="browse-jobs-btn">
                  Browse Available Jobs
                </Link>
              )}
            </div>
          )}

        </div>
      </div>

    </div>
  )
}

export default MyProposals
