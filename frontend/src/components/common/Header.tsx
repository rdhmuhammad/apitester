import React from 'react'
import { SidebarTrigger } from '../ui/sidebar.tsx'
import { Images } from '@/config/constant/Images'
import LanguagesDropdown from './LanguagesDropdown.tsx'
import { UserDropdown } from './UserDropdown.tsx'
import { UserCircle } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <img
          src={Images.APP_LOGO}
          alt='PUSINTELAD-logo'
          className='w-[30px] h-[37px] object-cover'
        />
        <h1 className="text-2xl font-semibold text-gray-800">
          Headquarters Security System
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <LanguagesDropdown />

        {/* <NotificationDropdown
          notifications={notifications}
          onMarkAllRead={handleMarkAllRead}
          onSoundToggle={setIsSoundOn}
          isSoundOn={isSoundOn}
        /> */}

        <UserDropdown
          trigger={
            <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
              {
                // dataUser?.profile_url ?
                //   <img
                //     src={(dataUser?.profile_url ?? "").length > 100 ? `data:image/jpg;base64,${(dataUser?.profile_url ?? "")}` : `${BASE_URL}${(dataUser?.profile_url ?? "")}`}
                //     alt="img-user"
                //     className="h-full w-full rounded-full object-cover"
                //   /> :
                  <div className="w-full h-full flex items-center justify-center">
                    <UserCircle className="h-4 w-4 text-gray-400" />
                  </div>
              }
            </button>
          }
        />
      </div>
    </header>
  )
}

export default Header