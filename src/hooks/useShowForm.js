import { useState } from 'react'

export const useShowForm = () => {
  const [showForm, setShowForm] = useState(false)
  const openForm = () => {
    setShowForm(!showForm)
  }

  return { showForm, openForm }
}
