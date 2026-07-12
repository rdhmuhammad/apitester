const ShortcutLegend = () => {
    return (
        <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-1 rounded-md border border-gray-200 bg-white/80 px-3 py-2 text-xs text-gray-500 shadow-sm backdrop-blur">
            <span><kbd className="rounded border border-gray-300 bg-gray-100 px-1 font-mono text-[11px]">Ctrl+Enter</kbd> Send Request</span>
            <span><kbd className="rounded border border-gray-300 bg-gray-100 px-1 font-mono text-[11px]">Ctrl+S</kbd> Push to Collection</span>
            <span><kbd className="rounded border border-gray-300 bg-gray-100 px-1 font-mono text-[11px]">Ctrl+P</kbd> Pull from Collection</span>
        </div>
    )
}

export default ShortcutLegend
