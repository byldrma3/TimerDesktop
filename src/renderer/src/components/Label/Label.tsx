import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@core/utils'
import type { VariantProps } from 'class-variance-authority'
import { labelVariants } from './Label.styles'

const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
        VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn('text-foreground', labelVariants(), className)}
        {...props}
    />
))
Label.displayName = LabelPrimitive.Root.displayName

export default Label
