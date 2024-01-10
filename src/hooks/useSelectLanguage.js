import { useState } from 'react'

export const useSelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value)
  }

  return { selectedLanguage, handleLanguageChange }
}
