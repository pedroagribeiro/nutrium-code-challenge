import AppointmentComponent from "../../component/appointments/Appointment";
import AppointmentsPageLayout from "../../layout/AppointmentsPageLayout";
import { Appointment } from "../../types/appointments.types";

type IndexProps = {
    appointments: Appointment[]
}

const Index: React.FC<IndexProps> = ({ appointments }) => {
    return (
        <AppointmentsPageLayout>
            {appointments.map((appointment, index) => (
                <AppointmentComponent key={index} appointment={appointment} />
            ))}
        </AppointmentsPageLayout>
    )
}

export default Index;