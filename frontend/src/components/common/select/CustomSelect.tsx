import React from 'react';
import { CustomSelectItem, Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';

interface IDataCustomSelect {
  label: string
  value: string
}

interface CustomSelectProps {
  value: string
  onChange: (value: string) => void
  datas: IDataCustomSelect[]
  placeholder?: string
  icon?: React.ReactNode
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, onChange, datas, placeholder, icon }: CustomSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <div className="flex items-center gap-2 truncate">
          {icon}
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>

      <SelectContent>
        {datas.map((data) => (
          <CustomSelectItem
            key={data.value}
            value={data.value}
            className="flex gap-2 items-center"
            selectedValue={value}
          >
            {data.label}
          </CustomSelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CustomSelect