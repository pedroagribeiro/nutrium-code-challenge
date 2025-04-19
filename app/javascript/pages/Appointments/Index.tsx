import { useEffect, useState } from 'react';
import AppointmentComponent from '../../component/appointments/Appointment';
import AppointmentsPageLayout from '../../layout/AppointmentsPageLayout';
import { Appointment } from '../../types/appointments.types';
import React from 'react';
import Loading from '../../component/ui/Loading';
import NoResultsFound from '../../component/ui/NoResultFound';

type IndexProps = {
  appointments: Appointment[] | undefined;
  newAppointment?: Appointment;
};

const Index: React.FC<IndexProps> = ({ appointments, newAppointment }) => {
  const [appointmentList, setAppointmentList] = useState<Appointment[]>(appointments || []);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setAppointmentList(appointments || []);
    setLoading(false);
  }, [appointments]);

  useEffect(() => {
    if (newAppointment) {
      setAppointmentList((prevAppointments) => [newAppointment, ...prevAppointments]);
    }
  }, [newAppointment]);

  const displayResults = () => {
    if (appointmentList.length > 0) {
      return appointmentList.map((appointment: Appointment, index: number) => (
        <AppointmentComponent key={index} appointment={appointment} />
      ));
    } else {
      <NoResultsFound message="No result were found." />;
    }
  };

  // NOTE: In this appointments being undefined is equivalent to Loading state
  return (
    <AppointmentsPageLayout>
      {isLoading ? <Loading message="Loading..." /> : displayResults()}
    </AppointmentsPageLayout>
  );
};

export default Index;
