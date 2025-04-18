import { Service } from "../../types/services.types";
import ModalDialog from "../ui/ModalDialog";
import ScheduleAppointmentForm from "./ScheduleAppointmentForm";

type ScheduleAppointmentDialogProps = {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    services: Service[]
}

const ScheduleAppointmentDialog: React.FC<ScheduleAppointmentDialogProps> = ({ isOpen, setOpen, services }) => {
    return (
        <ModalDialog isOpen={isOpen} setOpen={setOpen}>
            <ScheduleAppointmentForm services={services}/>
        </ModalDialog>
    )
}

export default ScheduleAppointmentDialog;