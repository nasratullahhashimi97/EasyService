
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <div className="app">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">YOUR WORK. YOUR FUTURE.</span>

          <h1>
            Find the right work.
            <br />
            <span>Build your future.</span>
          </h1>

          <p>
            Connect with talented people, discover opportunities,
            and turn your skills into success.
          </p>

          <div className="hero-buttons">
            <Link to="/find-work">Find Work</Link>
            <Link to="/find-talent">Hire Talent</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-icon">✦</div>
            <h3>Discover opportunities</h3>
            <p>Find work that matches your skills.</p>

            <div className="visual-line"></div>
            <div className="visual-line short"></div>

            <div className="visual-profile">
              <div className="profile-circle">ES</div>
              <div>
                <strong>EasyService</strong>
                <small>Work without limits</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="section-heading">
          <span>EXPLORE OPPORTUNITIES</span>
          <h2>Find work in your field</h2>
          <p>
            Discover opportunities that match your skills and interests.
          </p>
        </div>

        <div className="category-grid">
          <div className="category-card">
            <h3>💻 Programming</h3>
            <p>Websites, apps and software</p>
          </div>

          <div className="category-card">
            <h3>🎨 Graphic Design</h3>
            <p>Logos, branding and graphics</p>
          </div>

          <div className="category-card">
            <h3>✍️ Writing</h3>
            <p>Articles, content and translation</p>
          </div>

          <div className="category-card">
            <h3>🎬 Video Editing</h3>
            <p>Video production and editing</p>
          </div>

          <div className="category-card">
            <h3>📈 Digital Marketing</h3>
            <p>Social media and advertising</p>
          </div>

          <div className="category-card">
            <h3>📚 Education</h3>
            <p>Tutoring and online teaching</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-heading">
          <span>SIMPLE PROCESS</span>
          <h2>How EasyService works</h2>
          <p>
            Start working or hire talented people in three simple steps.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Create an Account</h3>
            <p>
              Sign up as a freelancer or client and create your profile.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Find Opportunities</h3>
            <p>
              Discover projects or find skilled people for your work.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Start Working</h3>
            <p>
              Connect, collaborate and complete your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="featured-jobs">
        <div className="section-heading">
          <span>RECENT OPPORTUNITIES</span>
          <h2>Featured Jobs</h2>
          <p>
            Explore opportunities and find work that matches your skills.
          </p>
        </div>

        <div className="jobs-grid">
          <div className="job-card">
            <span className="job-category">Programming</span>
            <h3>Build a Business Website</h3>
            <p>We need a professional website for our business.</p>
            <div className="job-details">
              <span>Fixed Price</span>
              <strong>$300</strong>
            </div>
            <Link to="/job-details/1">View Job</Link>
          </div>

          <div className="job-card">
            <span className="job-category">Graphic Design</span>
            <h3>Design a Company Logo</h3>
            <p>
              Looking for a creative designer to create a modern logo.
            </p>
            <div className="job-details">
              <span>Fixed Price</span>
              <strong>$80</strong>
            </div>
            <Link to="/job-details/2">View Job</Link>
          </div>

          <div className="job-card">
            <span className="job-category">Writing</span>
            <h3>English to Pashto Translation</h3>
            <p>Translate documents from English into Pashto.</p>
            <div className="job-details">
              <span>Fixed Price</span>
              <strong>$50</strong>
            </div>
            <Link to="/job-details/3">View Job</Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">

          <div className="footer-brand">
            <h2>EasyService</h2>
            <p>
              Connecting talent with opportunities.
              Build your future with EasyService.
            </p>
          </div>

          <div className="footer-links">
            <h3>For Freelancers</h3>
            <Link to="/find-work">Find Work</Link>
            <Link to="/signup">Create Profile</Link>
            <Link to="/find-work">Browse Categories</Link>
          </div>

          <div className="footer-links">
            <h3>For Clients</h3>
            <Link to="/find-talent">Find Talent</Link>
            <Link to="/signup">Post a Job</Link>
            <Link to="/how-it-works">How It Works</Link>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 EasyService. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Home
