import { useEffect } from "react";
import AppointmentComponent from "../../component/appointments/Appointment";
import AppointmentsPageLayout from "../../layout/AppointmentsPageLayout";
import { Appointment } from "../../types/appointments.types";
import React from "react";

type IndexProps = {
    appointments: Appointment[]
    updatedAppointment: Appointment
    errors?: Error[]
}

const Index: React.FC<IndexProps> = ({ appointments, updatedAppointment, errors }) => {
    const [localAppointments, setLocalAppointments] = React.useState<Appointment[]>(appointments);

    useEffect(() => {
        if (errors?.length) {
            alert(`There was an error updating the appointment - ${errors.join(", ")}`);
        }
    }, [errors])

    useEffect(() => {
        if (updatedAppointment) {
            setLocalAppointments((prevAppointments) => 
                prevAppointments.map(app => app.id === updatedAppointment.id ? updatedAppointment : app)
            )
        }
    }, [updatedAppointment])

    return (
        <AppointmentsPageLayout>
            {localAppointments.map((appointment, index) => (
                <AppointmentComponent key={index} appointment={appointment} />
            ))}
        </AppointmentsPageLayout>
    )
}

export default Index;