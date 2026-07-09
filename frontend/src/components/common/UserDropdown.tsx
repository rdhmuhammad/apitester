import React from 'react';
import {
  UserCircle,
  Info,
  LogOut
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { LOCALSTORAGE_KEY } from '@/config/constant/localstorage';

interface UserDropdownProps {
  trigger: React.ReactNode;
}

export const UserDropdown = ({ trigger }: UserDropdownProps) => {
  const { t } = useTranslation()
  const handleLogout = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY.TOKEN)
    localStorage.removeItem(LOCALSTORAGE_KEY.USER)
    window.location.href = "/"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="end">
        <DropdownMenuItem
          className="flex items-center py-2.5 px-3 cursor-pointer"
        >
          <UserCircle className="mr-2 h-4 w-4" />
          <span>{t("general.account")}</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem
          className="flex items-center py-2.5 px-3 cursor-pointer"
        >
          <Info className="mr-2 h-4 w-4" />
          <span>{t("sidebar.license_information")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center py-2.5 px-3 cursor-pointer text-red-500"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("general.logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
