
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useJobs } from '../context/JobsContext'
import { useSavedJobs } from '../context/SavedJobsContext'
import './FindWork.css'

function FindWork() {
  const { jobs } = useJobs()

  // Saved Jobs Context
  const { savedJobs, toggleSavedJob } = useSavedJobs()

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('All')
  const [selectedJobType, setSelectedJobType] = useState('All')
  const [selectedExperience, setSelectedExperience] = useState('All')
  const [sortBy, setSortBy] = useState('newest')

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 6

  // Check if a job is already saved
  function isJobSaved(jobId) {
    return savedJobs.some((savedJob) => savedJob.id === jobId)
  }

  // Reset all filters
  function clearFilters() {
    setSelectedCategory('All')
    setSearchTerm('')
    setSelectedBudget('All')
    setSelectedJobType('All')
    setSelectedExperience('All')
    setSortBy('newest')
  }

  // Return to page 1 when filters or sorting change
  useEffect(() => {
    setCurrentPage(1)
  }, [
    selectedCategory,
    searchTerm,
    selectedBudget,
    selectedJobType,
    selectedExperience,
    sortBy
  ])

  // Filter Jobs
  const filteredJobs = jobs.filter((job) => {
    const title = (job.title || '').toLowerCase()
    const description = (job.description || '').toLowerCase()
    const skills = (job.skills || []).join(' ').toLowerCase()
    const search = searchTerm.toLowerCase()

    const matchesCategory =
      selectedCategory === 'All' ||
      job.category === selectedCategory

    const matchesSearch =
      title.includes(search) ||
      description.includes(search) ||
      skills.includes(search)

    const matchesBudget =
      selectedBudget === 'All' ||
      (selectedBudget === '0-100' && job.budget <= 100) ||
      (selectedBudget === '100-500' && job.budget > 100 && job.budget <= 500) ||
      (selectedBudget === '500-1000' && job.budget > 500 && job.budget <= 1000) ||
      (selectedBudget === '1000+' && job.budget > 1000)

    const matchesJobType =
      selectedJobType === 'All' ||
      job.type === selectedJobType

    const matchesExperience =
      selectedExperience === 'All' ||
      job.experience === selectedExperience

    return (
      matchesCategory &&
      matchesSearch &&
      matchesBudget &&
      matchesJobType &&
      matchesExperience
    )
  })

  // Sort Jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'budget-high') {
      return b.budget - a.budget
    }

    if (sortBy === 'budget-low') {
      return a.budget - b.budget
    }

    return 0
  })

  // Calculate pagination
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage)

  const startIndex = (currentPage - 1) * jobsPerPage
  const endIndex = startIndex + jobsPerPage

  const currentJobs = sortedJobs.slice(startIndex, endIndex)

  // Change page
  function goToPage(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="find-work-page">

      {/* Page Header */}
      <div className="find-work-header">
        <h1>Find Your Next Opportunity</h1>

        <p>
          Discover projects, connect with clients,
          and build your future.
        </p>

        <form
          className="find-work-search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search for jobs or skills..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </div>

      {/* Main Content */}
      <div className="find-work-content">

        {/* Job Filters */}
        <aside className="job-filters">
          <div className="filter-heading">
            <h2>Filter Jobs</h2>

            <button type="button" onClick={clearFilters}>
              Clear All
            </button>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h3>Category</h3>

            {[
              'All',
              'Programming',
              'Graphic Design',
              'Writing',
              'Digital Marketing'
            ].map((category) => (
              <label key={category}>
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                />

                {category === 'All' ? 'All Categories' : category}
              </label>
            ))}
          </div>

          {/* Budget Filter */}
          <div className="filter-group">
            <h3>Budget</h3>

            {[
              { value: 'All', label: 'All Budgets' },
              { value: '0-100', label: '$0 - $100' },
              { value: '100-500', label: '$100 - $500' },
              { value: '500-1000', label: '$500 - $1000' },
              { value: '1000+', label: '$1000+' }
            ].map((budget) => (
              <label key={budget.value}>
                <input
                  type="radio"
                  name="budget"
                  checked={selectedBudget === budget.value}
                  onChange={() => setSelectedBudget(budget.value)}
                />

                {budget.label}
              </label>
            ))}
          </div>

          {/* Job Type Filter */}
          <div className="filter-group">
            <h3>Job Type</h3>

            {['All', 'Fixed Price', 'Hourly'].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="jobType"
                  checked={selectedJobType === type}
                  onChange={() => setSelectedJobType(type)}
                />

                {type === 'All' ? 'All Types' : type}
              </label>
            ))}
          </div>

          {/* Experience Filter */}
          <div className="filter-group">
            <h3>Experience Level</h3>

            {['All', 'Entry Level', 'Intermediate', 'Expert'].map((level) => (
              <label key={level}>
                <input
                  type="radio"
                  name="experience"
                  checked={selectedExperience === level}
                  onChange={() => setSelectedExperience(level)}
                />

                {level === 'All' ? 'All Levels' : level}
              </label>
            ))}
          </div>
        </aside>

        {/* Job List */}
        <div className="job-list">

          <div className="job-list-header">
            <div>
              <h2>Available Jobs</h2>
              <span>{sortedJobs.length} Jobs Found</span>
            </div>

            <div className="sort-jobs">
              <label htmlFor="sortJobs">Sort by:</label>

              <select
                id="sortJobs"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="budget-high">Highest Budget</option>
                <option value="budget-low">Lowest Budget</option>
              </select>
            </div>
          </div>

          {sortedJobs.length > 0 ? (
            <>
              {/* Current Page Jobs */}
              {currentJobs.map((job) => (
                <div className="job-card" key={job.id}>

                  <div className="job-card-top">
                    <span className="job-category">
                      {job.category}
                    </span>

                    <span className="job-time">
                      {job.time}
                    </span>
                  </div>

                  <h3>{job.title}</h3>

                  <p>{job.description}</p>

                  <div className="job-skills">
                    {(job.skills || []).map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <div className="job-experience">
                    <span>Experience: {job.experience}</span>
                  </div>

                  <div className="job-card-bottom">
                    <div>
                      <strong>${job.budget}</strong>
                      <small>{job.type}</small>
                    </div>

                    <div className="job-card-actions">

                      {/* Save / Remove Job Button */}
                      <button
                        type="button"
                        className={
                          isJobSaved(job.id)
                            ? 'save-job-button saved'
                            : 'save-job-button'
                        }
                        onClick={() => toggleSavedJob(job)}
                      >
                        {isJobSaved(job.id) ? '♥ Saved' : '♡ Save Job'}
                      </button>

                      <Link
                        to={`/job-details/${job.id}`}
                        className="view-job-link"
                      >
                        View Job
                      </Link>

                    </div>
                  </div>

                </div>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">

                  <button
                    type="button"
                    className="pagination-arrow"
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                  >
                    Previous
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <button
                      type="button"
                      key={page}
                      className={
                        currentPage === page
                          ? 'pagination-number active'
                          : 'pagination-number'
                      }
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    className="pagination-arrow"
                    disabled={currentPage === totalPages}
                    onClick={() => goToPage(currentPage + 1)}
                  >
                    Next
                  </button>

                </div>
              )}

              <p className="pagination-info">
                Showing {startIndex + 1}–{Math.min(endIndex, sortedJobs.length)}
                {' '}of {sortedJobs.length} jobs
              </p>
            </>
          ) : (
            <div className="no-jobs">
              <h3>No Jobs Found</h3>

              <p>
                Try another search term or select a different filter.
              </p>

              <button type="button" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default FindWork
