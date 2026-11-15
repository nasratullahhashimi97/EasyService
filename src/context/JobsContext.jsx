
import { createContext, useContext, useState } from 'react'
import initialJobs from '../data/jobs'

const JobsContext = createContext()

export function JobsProvider({ children }) {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem('easyServiceJobs')

    return savedJobs
      ? JSON.parse(savedJobs)
      : initialJobs
  })

  function addJob(newJob) {
    setJobs((currentJobs) => {
      const updatedJobs = [
        {
          ...newJob,
          id: Date.now(),
          time: 'Just now',
          proposals: 0
        },
        ...currentJobs
      ]

      localStorage.setItem(
        'easyServiceJobs',
        JSON.stringify(updatedJobs)
      )

      return updatedJobs
    })
  }

  return (
    <JobsContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobsContext.Provider>
  )
}

export function useJobs() {
  return useContext(JobsContext)
}
