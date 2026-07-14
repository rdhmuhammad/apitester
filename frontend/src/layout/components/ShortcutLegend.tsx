import {useState} from "react"
import {Info, X} from "lucide-react"

const ShortcutLegend = () => {
    const [open, setOpen] = useState(true)

    return open ? (
        <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-1 rounded-md border border-white/20 bg-white/60 px-3 py-2 text-xs text-gray-600 shadow-lg backdrop-blur-xl">
            <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-500">Shortcuts</span>
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <X size={14}/>
                </button>
            </div>
            <span><kbd className="rounded border border-gray-300 bg-gray-100 px-1 font-mono text-[11px]">Ctrl+Enter</kbd> Send Request</span>
            <span><kbd className="rounded border border-gray-300 bg-gray-100 px-1 font-mono text-[11px]">Ctrl+S</kbd> Push to Collection</span>
            <span><kbd className="rounded border border-gray-300 bg-gray-100 px-1 font-mono text-[11px]">Ctrl+P</kbd> Pull from Collection</span>
        </div>
    ) : (
        <button
            onClick={() => setOpen(true)}
            className="fixed bottom-4 left-4 z-50 rounded-full border border-white/20 bg-white/60 p-2 shadow-lg backdrop-blur-xl text-gray-500 hover:text-gray-700"
        >
            <Info size={16}/>
        </button>
    )
}

export default ShortcutLegend