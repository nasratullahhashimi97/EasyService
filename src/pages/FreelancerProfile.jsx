
import './FreelancerProfile.css'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Star, Briefcase, Clock, ArrowLeft } from 'lucide-react'
import freelancers from '../data/freelancers'

function FreelancerProfile() {
  const { id } = useParams()

  const freelancer = freelancers.find(
    (person) => person.id === Number(id)
  )

  if (!freelancer) {
    return (
      <div className="profile-not-found">
        <h2>Freelancer Not Found</h2>
        <Link to="/find-talent">Back to Find Talent</Link>
      </div>
    )
  }

  return (
    <div className="freelancer-profile-page">

      <Link to="/find-talent" className="back-link">
        <ArrowLeft size={18} />
        Back to Freelancers
      </Link>

      <div className="profile-card">

        <div className="profile-header">
          <img
            src={freelancer.image}
            alt={freelancer.name}
            className="profile-avatar"
          />

          <div className="profile-identity">
            <h1>{freelancer.name}</h1>
            <h3>{freelancer.title}</h3>

            <div className="profile-location">
              <MapPin size={16} />
              {freelancer.location}
            </div>
          </div>
        </div>

        <div className="profile-stats">

          <div>
            <Star size={20} />
            <strong>{freelancer.rating}</strong>
            <span>Rating</span>
          </div>

          <div>
            <Briefcase size={20} />
            <strong>{freelancer.jobs}</strong>
            <span>Projects</span>
          </div>

          <div>
            <Clock size={20} />
            <strong>{freelancer.experience}</strong>
            <span>Experience</span>
          </div>

        </div>

        <section className="profile-section">
          <h2>About Me</h2>
          <p>{freelancer.bio}</p>
        </section>

        <section className="profile-section">
          <h2>Professional Skills</h2>

          <div className="profile-skills">
            {freelancer.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <div className="profile-bottom">
          <div>
            <span>Hourly Rate</span>
            <h2>${freelancer.rate} / hour</h2>
          </div>

          <button type="button" className="hire-button">
            Hire Freelancer
          </button>
        </div>

      </div>
    </div>
  )
}

export default FreelancerProfile
