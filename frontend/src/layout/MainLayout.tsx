import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import SidebarLayout from "@/layout/SidebarLayout.tsx";
import HeaderLayout from "@/layout/Header.tsx";

interface IMainLayout{
    children: React.ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({children}: IMainLayout)=>{
    return(
        <SidebarProvider>
            <HeaderLayout/>
            <SidebarLayout/>
            <main className="flex-1 pt-[73px] overflow-hidden h-100dvh">
                {children}
            </main>
        </SidebarProvider>
    )
}

export default MainLayout