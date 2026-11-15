
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Search, MapPin, Star, Briefcase, Clock } from 'lucide-react'
import freelancers from '../data/freelancers'
import './FindTalent.css'

function FindTalent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const search = searchTerm.trim().toLowerCase()

    const matchesSearch =
      freelancer.name.toLowerCase().includes(search) ||
      freelancer.title.toLowerCase().includes(search) ||
      freelancer.skills.join(' ').toLowerCase().includes(search)

    const matchesCategory =
      selectedCategory === 'All' ||
      freelancer.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      freelancer.skills.join(' ').toLowerCase().includes(selectedCategory.toLowerCase())

    return matchesSearch && matchesCategory
  })

  return (
    <div className="find-talent-page">

      <div className="talent-header">
        <span className="talent-label">FIND THE RIGHT EXPERT</span>

        <h1>Find the Perfect Talent</h1>

        <p>
          Connect with skilled professionals and bring your
          projects to life.
        </p>

        <div className="talent-search">
          <Search size={21} />

          <input
            type="text"
            placeholder="Search by name, skill or profession..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <button
            type="button"
            onClick={() => setSearchTerm(searchTerm.trim())}
          >
            Search
          </button>
        </div>
      </div>

      <div className="talent-content">

        <div className="talent-top">
          <div>
            <h2>Explore Freelancers</h2>
            <p>{filteredFreelancers.length} professionals available</p>
          </div>

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Developer">Development</option>
            <option value="Designer">Design</option>
            <option value="React">React</option>
            <option value="UI">UI/UX Design</option>
          </select>
        </div>

        <div className="freelancer-grid">

          {filteredFreelancers.length > 0 ? (
            filteredFreelancers.map((freelancer) => (
              <div className="freelancer-card" key={freelancer.id}>

                <div className="freelancer-card-header">
                  <img
                    src={freelancer.image}
                    alt={freelancer.name}
                    className="freelancer-avatar"
                  />

                  <div className="freelancer-identity">
                    <h3>{freelancer.name}</h3>
                    <span>{freelancer.title}</span>
                  </div>

                  <span className="verified-badge">✓</span>
                </div>

                <div className="freelancer-rating">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <strong>{freelancer.rating}</strong>
                  <span>({freelancer.jobs} jobs)</span>
                </div>

                <div className="freelancer-skills">
                  {freelancer.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="freelancer-details">
                  <span>
                    <MapPin size={15} />
                    {freelancer.location}
                  </span>

                  <span>
                    <Briefcase size={15} />
                    {freelancer.experience}
                  </span>

                  <span>
                    <Clock size={15} />
                    {freelancer.jobs} Projects
                  </span>
                </div>

                <div className="freelancer-card-footer">
                  <div>
                    <strong>${freelancer.rate}</strong>
                    <small>/ hour</small>
                  </div>
<Link
  to={`/freelancer/${freelancer.id}`}
  className="view-profile-btn"
>
  View Profile
</Link>
                </div>

              </div>
            ))
          ) : (
            <div className="no-freelancers">
              <h3>No Freelancers Found</h3>
              <p>Try another name, skill or category.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default FindTalent
