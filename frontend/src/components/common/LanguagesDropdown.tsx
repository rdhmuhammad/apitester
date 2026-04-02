import React from 'react'
import CustomSelect from './select/CustomSelect.tsx'
import useLocalStorage from '@/hooks/useLocalStorage';
import { LANGUAGE_DATA } from '@/config/constant/Language';

const LanguagesDropdown: React.FC = () => {
  const [language, setLanguage] = useLocalStorage("language", "en");

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
  };

  return (
    <div>
      <CustomSelect
        datas={LANGUAGE_DATA}
        value={language}
        onChange={changeLanguage}
        // icon={<TbLayoutGridFilled className="h-4 w-4 text-gray-500" />}
        placeholder="Select language"
      />
    </div>
  )
}

export default LanguagesDropdown