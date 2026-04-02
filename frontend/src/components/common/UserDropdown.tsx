
import React from 'react';
import {
  Settings,
  UserCircle,
  Info,
  HelpCircle,
  LogOut
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/config/constant/routes';
import { useLogout } from '@/hooks/useLogout';

interface UserDropdownProps {
  trigger: React.ReactNode;
}

export const UserDropdown = ({ trigger }: UserDropdownProps) => {
  const navigate = useNavigate()
  const { handleLogout } = useLogout()
  const { t } = useTranslation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="end">
        <DropdownMenuItem
          className="flex items-center py-2.5 px-3 cursor-pointer"
          // onClick={() => navigate(`${ROUTES.ACCOUNT}`)}
        >
          <UserCircle className="mr-2 h-4 w-4" />
          <span>{t("general.account")}</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem
          className="flex items-center py-2.5 px-3 cursor-pointer"
          onClick={() => {
            // navigate(`${ROUTES.LICENSE}`)
          }}
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
