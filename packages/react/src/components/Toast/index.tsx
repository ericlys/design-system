import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Close, Description, Title, ToastContainer, Viewport } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

interface ToastProiverProps
  extends ComponentProps<typeof RadixToast.Provider> {}

export function ToastProiver({ children, ...rest }: ToastProiverProps) {
  return <RadixToast.Provider {...rest}>{children}</RadixToast.Provider>
}

export function Toast({ title, description, ...rest }: ToastProps) {
  return (
    <>
      <ToastContainer {...rest}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Close>
          <X size={20} color="#A9A9B2" />
        </Close>
      </ToastContainer>
      <Viewport />
    </>
  )
}

Toast.displayName = 'Toast'
