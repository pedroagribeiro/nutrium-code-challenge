import { Service } from "../../types/services.types";
import ModalDialog from "../ui/ModalDialog";
import ScheduleAppointmentForm from "./ScheduleAppointmentForm";

type ScheduleAppointmentDialogProps = {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    professionalId: number
    services: Service[]
}

const ScheduleAppointmentDialog: React.FC<ScheduleAppointmentDialogProps> = ({ isOpen, setOpen, professionalId, services }) => {
    return (
        <ModalDialog isOpen={isOpen} setOpen={setOpen}>
            <ScheduleAppointmentForm professionalId={professionalId} services={services}/>
        </ModalDialog>
    )
}

export default ScheduleAppointmentDialog;