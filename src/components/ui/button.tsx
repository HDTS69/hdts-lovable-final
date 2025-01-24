import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-800 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900",
        destructive:
          "bg-red-700 text-white hover:bg-red-800 active:bg-red-900",
        outline:
          "border-2 border-teal-700 bg-transparent text-teal-800 hover:bg-teal-50 hover:text-teal-900 hover:border-teal-800",
        secondary:
          "bg-teal-200 text-teal-900 hover:bg-teal-300 active:bg-teal-400",
        ghost: "text-teal-800 hover:bg-teal-100 hover:text-teal-900",
        link: "text-teal-800 underline-offset-4 hover:underline hover:text-teal-900",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
