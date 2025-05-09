import { ReactNode } from "react"

export type ToastProps = {
  id?: string
  title?: string
  description?: ReactNode
  action?: ReactNode
  duration?: number
}

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000

type ToasterToast = ToastProps & {
  id: string
  open: boolean
  title?: string
  description?: ReactNode
  action?: ReactNode
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toasts: ToasterToast[] = []

export function useToast() {
  const toast = (props: ToastProps) => {
    const id = props.id || genId()
    const newToast = {
      ...props,
      id,
      open: true,
    }
    
    toasts.push(newToast)
    
    return id
  }

  return {
    toast,
    dismiss: (toastId?: string) => {
      const index = toasts.findIndex((toast) => toast.id === toastId)
      if (index >= 0) {
        toasts[index].open = false
        setTimeout(() => {
          toasts.splice(index, 1)
        }, TOAST_REMOVE_DELAY)
      }
    },
    toasts: toasts.slice(0, TOAST_LIMIT),
  }
}
