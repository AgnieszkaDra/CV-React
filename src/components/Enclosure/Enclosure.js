import React, { useState } from 'react'
import classes from './styles.module.css'
import { useSelectLanguage } from '../../hooks/useSelectLanguage'
import { useCompanyName } from '../../hooks/useCompanyName'

export const Enclosure = () => {
  const { selectedLanguage, handleLanguageChange } = useSelectLanguage()
  const { companyName, handleCompanyName } = useCompanyName()
  const [confirmationClass, setConfirmationClass] = useState('')

  const handleConfirmationClick = () => {
    setConfirmationClass('none')
  }

  const enclosure = {
    polish: `Wyrażam zgodę na przetwarzanie moich danych osobowych przez ${companyName}  w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.
    Wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie przyszłych procesów rekrutacyjnych.`,
    polish2: 'Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
    english: `I hereby consent to my personal data being processed by ${companyName} for the purpose of considering my application for the vacancy advertised `
  }

  return (
    <>
      {selectedLanguage === '' && <div><p>{enclosure.polish}</p><p>{enclosure.polish2}</p></div>}
      {selectedLanguage === 'polish' && <p>{enclosure.polish}</p>}
      {selectedLanguage === 'english' && <p>{enclosure.english}</p>}
      <div className={`${confirmationClass} ${classes.container}`} >
        <label htmlFor={'companyName'}>Company name</label>
        <input
          type={'text'}
          id={'companyName'}
          value={companyName}
          onChange={handleCompanyName}
        />
        <label
          htmlFor={'language'}
        >
          Language:
        </label>
        <select
          id={'language'}
          name={'language'}
          value={selectedLanguage}
          onChange={handleLanguageChange}
          required
        >
          <option
            value={'polish'}
          >
            Polish
          </option>
          <option
            value={'english'}
          >
            English
          </option>
        </select>
        <button
          type={'submit'}
          onClick={handleConfirmationClick}
        >
          Confirm
        </button>
      </div>
    </>
  )
}

export default Enclosure
