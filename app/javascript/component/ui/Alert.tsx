import { Dialog } from "@headlessui/react"

type AlertProps = {
    children: React.ReactNode
    isOpen: boolean
    setOpen: (open: boolean) => void
}

const Alert: React.FC<AlertProps> = ({ children, isOpen, setOpen }) => {
  return (
      <Dialog open={isOpen} as="div" className="fixed z-10 top-4 right-4 focus:outline-none" onClose={() => setOpen(false)}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {children}
          </div>
        </div>
      </Dialog>
  )
}

export default Alert;