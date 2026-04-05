import RequestConfigTabs from "@/pages/editor/components/RequestConfigTabs.tsx";
import ResponseView from "@/pages/editor/components/ResponseView.tsx";



const Editor: React.FC = () => {

    return (
        <div className="h-full overflow-auto bg-slate-50">
            <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col gap-4 p-4">
                <RequestConfigTabs/>
                <ResponseView/>
            </div>
        </div>
    );
};

export default Editor;
