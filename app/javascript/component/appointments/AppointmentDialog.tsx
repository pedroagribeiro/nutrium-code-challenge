import { Appointment } from '../../types/appointments.types';
import ModalDialog from '../ui/ModalDialog';
import AppointmentForm from './AppointmentForm';

type AppointmentDialogProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  appointment: Appointment;
};

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({ isOpen, setOpen, appointment }) => {
  return (
    <ModalDialog isOpen={isOpen} setOpen={setOpen}>
      <AppointmentForm appointment={appointment} setOpen={setOpen} />
    </ModalDialog>
  );
};

export default AppointmentDialog;
