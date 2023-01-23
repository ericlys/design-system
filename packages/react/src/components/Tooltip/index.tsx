import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'

export interface TooltipProviderProps
  extends ComponentProps<typeof RadixTooltip.Provider> {}

export function TooltipProvider({ children }: TooltipProviderProps) {
  return <RadixTooltip.Provider>{children}</RadixTooltip.Provider>
}

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: ReactNode
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipContainer>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

      <RadixTooltip.Portal>
        <TooltipContent>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </RadixTooltip.Portal>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
