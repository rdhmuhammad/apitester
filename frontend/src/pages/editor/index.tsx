import RequestConfigTabs from "@/pages/editor/components/RequestConfigTabs.tsx";
import ResponseView from "@/pages/editor/components/ResponseView.tsx";



const Editor: React.FC = () => {

    return (
        <div className="h-full overflow-auto bg-slate-50">
            <h3 className='text-3xl text-slate-900 font-semibold pl-4 pt-4'>Auth - Login</h3>
            <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col gap-4 p-4">
                <RequestConfigTabs/>
                <ResponseView/>
            </div>
        </div>
    );
};

export default Editor;
