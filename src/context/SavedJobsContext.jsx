
import { createContext, useContext, useState } from 'react'

const SavedJobsContext = createContext()

export function SavedJobsProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState(() => {
    const storedJobs = localStorage.getItem('easyServiceSavedJobs')

    return storedJobs ? JSON.parse(storedJobs) : []
  })

  function toggleSavedJob(job) {
    setSavedJobs((currentJobs) => {
      const alreadySaved = currentJobs.some(
        (savedJob) => savedJob.id === job.id
      )

      const updatedJobs = alreadySaved
        ? currentJobs.filter((savedJob) => savedJob.id !== job.id)
        : [...currentJobs, job]

      localStorage.setItem(
        'easyServiceSavedJobs',
        JSON.stringify(updatedJobs)
      )

      return updatedJobs
    })
  }

  return (
    <SavedJobsContext.Provider value={{ savedJobs, toggleSavedJob }}>
      {children}
    </SavedJobsContext.Provider>
  )
}

export function useSavedJobs() {
  return useContext(SavedJobsContext)
}
