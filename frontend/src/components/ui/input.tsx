import * as React from "react"

import {cn} from "@/lib/utils"

function Input({className, type, ...props}: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                className
            )}
            {...props}
        />
    )
}

interface InputWithIconProps extends React.ComponentProps<"input"> {
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
    ({className, icon, iconPosition = "right", ...props}, ref) => {
        return (
            <div className="relative flex items-center w-full">
                {icon && iconPosition === "left" && (
                    <div className="absolute left-3 flex items-center pointer-events-none text-muted-foreground">
                        {icon}
                    </div>
                )}
                <input
                    ref={ref}
                    data-slot="input"
                    className={cn(
                        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                        icon && iconPosition === "left" && "pl-10",
                        icon && iconPosition === "right" && "pr-10",
                        className
                    )}
                    {...props}
                />
                {icon && iconPosition === "right" && (
                    <div className="absolute right-3 flex items-center pointer-events-none text-muted-foreground">
                        {icon}
                    </div>
                )}
            </div>
        )
    }
)

InputWithIcon.displayName = "InputWithIcon"

export {Input, InputWithIcon}