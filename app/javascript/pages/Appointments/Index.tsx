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
  const [page, setPage] = useState<number>(1);

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
      const startIndex = (page - 1) * 6;
      const endIndex = startIndex + 6;
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {appointmentList
            .slice(startIndex, endIndex)
            .map((appointment: Appointment, index: number) => (
              <AppointmentComponent key={index} appointment={appointment} />
            ))}
        </div>
      );
    } else {
      <NoResultsFound message="No result were found." />;
    }
  };

  const setPreviousPage = () => {
    setPage(page - 1);
  };

  const setNextPage = () => {
    setPage(page + 1);
  };

  const existsPreviousPage = () => {
    return page > 1 && page !== 1;
  };

  const existsNextPage = () => {
    // Page size is 6
    return page * 6 < appointmentList.length;
  };

  // NOTE: In this appointments being undefined is equivalent to Loading state
  return (
    <AppointmentsPageLayout
      setPreviousPage={setPreviousPage}
      setNextPage={setNextPage}
      existsPreviousPage={existsPreviousPage}
      existsNextPage={existsNextPage}
    >
      {isLoading ? <Loading message="Loading..." /> : displayResults()}
    </AppointmentsPageLayout>
  );
};

export default Index;
