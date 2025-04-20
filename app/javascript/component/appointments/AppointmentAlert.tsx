import { Button, DialogPanel, DialogTitle } from '@headlessui/react';
import Alert from '../ui/Alert';

type AppointmentAlertProps = {
  success: boolean;
  successMessage: string;
  errorMessage: string;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  dismiss: () => void;
  dismissMessage: string;
};

const AppointmentAlert: React.FC<AppointmentAlertProps> = ({
  success,
  successMessage,
  errorMessage,
  isOpen,
  setOpen,
  dismiss,
  dismissMessage,
}) => {
  return (
    <Alert isOpen={isOpen} setOpen={setOpen}>
      <DialogPanel
        transition
        className="w-full max-w-md rounded-sm p-6 bg-white border-1 border-gray-400 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
      >
        <DialogTitle as="h3" className="text-lg font-bold text-gray-500">
          {success && (
            <p className="mt-2 text-sm/6 text-gray-400">
              {success ? successMessage : errorMessage}
            </p>
          )}
        </DialogTitle>
        <div className="mt-4">
          <Button
            className={`inline-flex items-center gap-2 rounded-md ${
              success === true ? 'bg-[#19af91]' : 'bg-gray-700'
            } py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700`}
            onClick={() => dismiss()}
          >
            {dismissMessage}
          </Button>
        </div>
      </DialogPanel>
    </Alert>
  );
};

export default AppointmentAlert;
