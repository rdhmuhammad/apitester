import { Check, X } from "lucide-react";
import { toast } from "sonner";

class CustomToast {
    static success(message: string) {
        toast.custom((toastId) => (
            <div className="flex items-center justify-between bg-white rounded-[6px] shadow-md px-4 py-3 w-full min-w-[320px] gap-3">
                <div className="flex items-center gap-2.5">
                    <div className="p-[7px] rounded-[8px] bg-green-100">
                        <div className="bg-emerald-600 text-white p-1 rounded-full">
                            <Check size={10} strokeWidth={5} />
                        </div>
                    </div>
                    <span className="text-gray-500 font-normal text-sm">
            {message}
          </span>
                </div>
                <button
                    onClick={() => toast.dismiss(toastId)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <X size={18} />
                </button>
            </div>
        ));
    }
    static delete(message: string) {
        toast.custom((toastId) => (
            <div className="flex items-center justify-between bg-white rounded-[6px] shadow-md px-4 py-3 w-full min-w-[320px] gap-3">
                <div className="flex items-center gap-2.5">
                    <div className="p-[7px] rounded-[8px] bg-red-100">
                        <HiTrash size={18} className="text-red-600" />
                    </div>
                    <span className="text-gray-500 font-normal text-sm">
            {message}
          </span>
                </div>
                <button
                    onClick={() => toast.dismiss(toastId)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <X size={18} />
                </button>
            </div>
        ));
    }
    static error(message: string) {
        toast.custom((toastId) => (
            <div className="flex items-center justify-between bg-white rounded-[6px] shadow-md px-4 py-3 w-full min-w-[320px] gap-3">
                <div className="flex items-center gap-2.5">
                    <div className="p-[7px] rounded-[8px] bg-red-100">
                        <MdErrorOutline size={18} className="text-red-600" />
                    </div>
                    <span className="text-gray-500 font-normal text-sm">
            {message}
          </span>
                </div>
                <button
                    onClick={() => toast.dismiss(toastId)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <X size={18} />
                </button>
            </div>
        ));
    }
}

export default CustomToast