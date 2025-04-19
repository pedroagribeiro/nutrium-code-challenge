import { Button, DialogPanel, DialogTitle } from '@headlessui/react';
import Alert from '../ui/Alert';
import { useTranslation } from 'react-i18next';

type AppointmentAlertProps = {
  success: boolean;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

const AppointmentAlert: React.FC<AppointmentAlertProps> = ({ success, isOpen, setOpen }) => {
  const { t } = useTranslation();

  return (
    <Alert isOpen={isOpen} setOpen={setOpen}>
      <DialogPanel
        transition
        className="w-full max-w-md rounded-sm p-6 bg-white border-1 border-gray-400 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
      >
        <DialogTitle as="h3" className="text-lg font-bold text-gray-500">
          {success
            ? 'The appointment status was updated'
            : 'The appointment status could not be updated'}
        </DialogTitle>
        {!success && (
          <p className="mt-2 text-sm/6 text-gray-400">{t('appointments.updateAlert.error')}</p>
        )}
        <div className="mt-4">
          <Button
            className={`inline-flex items-center gap-2 rounded-md ${
              success === true ? 'bg-[#19af91]' : 'bg-gray-700'
            } py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700`}
            onClick={() => setOpen(false)}
          >
            {t('appointments.updateAlert.forward')}
            Got it, thanks!
          </Button>
        </div>
      </DialogPanel>
    </Alert>
  );
};

export default AppointmentAlert;
