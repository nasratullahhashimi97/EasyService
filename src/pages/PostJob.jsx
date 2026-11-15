import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useJobs } from '../context/JobsContext'
import './PostJob.css'

function PostJob() {
  const { addJob } = useJobs()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [budget, setBudget] = useState('')
  const [type, setType] = useState('Fixed Price')
  const [experience, setExperience] = useState('Intermediate')
  const [duration, setDuration] = useState('')
  const [location, setLocation] = useState('Worldwide')
  const [skills, setSkills] = useState('')
  const [responsibilities, setResponsibilities] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const newJob = {
      title,
      category,
      description,
      fullDescription: description,
      budget: Number(budget),
      type,
      experience,
      duration,
      location,
      skills: skills.split(',').map((skill) => skill.trim()).filter(Boolean),
      responsibilities: responsibilities
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean),
      client: {
        name: 'EasyService Client',
        country: 'Afghanistan',
        initials: 'EC',
        rating: 'New Client',
        totalJobs: 0,
        memberSince: new Date().getFullYear()
      }
    }

    addJob(newJob)
    navigate('/find-work')
  }

  return (
    <div className="post-job-page">
      <h1>Post a Job</h1>
      <p>Describe your project and find the right freelancer.</p>

      <form onSubmit={handleSubmit}>
        <label>Job Title</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Example: Build a Business Website"
          required
        />

        <label>Category</label>
        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Example: Programming"
          required
        />

        <label>Job Description</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe your project..."
          rows="6"
          required
        />

        <label>Budget ($)</label>
        <input
          type="number"
          min="1"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          placeholder="Example: 300"
          required
        />

        <label>Job Type</label>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>Fixed Price</option>
          <option>Hourly</option>
        </select>

        <label>Experience Level</label>
        <select
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        >
          <option>Entry</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>

        <label>Project Duration</label>
        <input
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          placeholder="Example: 1 - 3 Months"
          required
        />

        <label>Location</label>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          required
        />

        <label>Required Skills</label>
        <input
          value={skills}
          onChange={(event) => setSkills(event.target.value)}
          placeholder="React, JavaScript, CSS"
          required
        />

        <label>Responsibilities (one per line)</label>
        <textarea
          value={responsibilities}
          onChange={(event) => setResponsibilities(event.target.value)}
          placeholder={'Build the website\nMake it responsive'}
          rows="4"
          required
        />

        <button type="submit">Publish Job</button>
      </form>
    </div>
  )
}

export default PostJob