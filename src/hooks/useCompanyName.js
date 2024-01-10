import { useState } from 'react'

export const useCompanyName = () => {
  const [companyName, setCompanyName] = useState('')
  const handleCompanyName = (event) => {
    setCompanyName(event.target.value)
  }

  return { companyName, handleCompanyName }
}
