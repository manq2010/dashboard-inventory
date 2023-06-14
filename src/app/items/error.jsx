'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import DashboardLayout from "@/app/components/dashboard/layout";
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <DashboardLayout>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </DashboardLayout>
  )
}