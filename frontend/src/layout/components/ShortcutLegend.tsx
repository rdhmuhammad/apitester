import {useState} from "react"
import {Info, X} from "lucide-react"

const ShortcutLegend = () => {
    const [open, setOpen] = useState(true)

    return open ? (
        <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-1 rounded-md border border-border bg-card/80 px-3 py-2 text-xs text-muted-foreground shadow-lg backdrop-blur-xl">
            <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-foreground">Shortcuts</span>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <X size={14}/>
                </button>
            </div>
            <span><kbd className="rounded border border-border bg-muted px-1 font-mono text-[11px] text-foreground">Ctrl+Enter</kbd> Send Request</span>
            <span><kbd className="rounded border border-border bg-muted px-1 font-mono text-[11px] text-foreground">Ctrl+S</kbd> Push to Collection</span>
            <span><kbd className="rounded border border-border bg-muted px-1 font-mono text-[11px] text-foreground">Ctrl+P</kbd> Pull from Collection</span>
        </div>
    ) : (
        <button
            onClick={() => setOpen(true)}
            className="fixed bottom-4 left-4 z-50 rounded-full border border-border bg-card/80 p-2 shadow-lg backdrop-blur-xl text-muted-foreground hover:text-foreground"
        >
            <Info size={16}/>
        </button>
    )
}

export default ShortcutLegend