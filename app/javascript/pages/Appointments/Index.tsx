import { useEffect, useMemo, useState } from 'react';
import AppointmentComponent from '../../component/appointments/Appointment';
import AppointmentsPageLayout from '../../layout/AppointmentsPageLayout';
import { Appointment } from '../../types/appointments.types';
import React from 'react';
import Loading from '../../component/ui/Loading';
import NoResultsFound from '../../component/ui/NoResultFound';
import { useTranslation } from 'react-i18next';
import { useAppointmentsPagination, PAGE_SIZE } from '../../context/AppointmentsPaginationContext';

type IndexProps = {
  appointments: Appointment[] | undefined;
  newAppointment?: Appointment;
};

const Index: React.FC<IndexProps> = ({ appointments, newAppointment }) => {
  const { t } = useTranslation();
  const [appointmentList, setAppointmentList] = useState<Appointment[]>(appointments || []);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { page } = useAppointmentsPagination();

  useEffect(() => {
    setAppointmentList(appointments || []);
    setLoading(false);
  }, [appointments]);

  useEffect(() => {
    if (newAppointment) {
      setAppointmentList((prevAppointments) => [newAppointment, ...prevAppointments]);
    }
  }, [newAppointment]);

  const paginatedAppointments = useMemo(() => {
    return appointmentList.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  }, [appointmentList, page]);

  const displayResults = () => {
    if (appointmentList.length > 0) {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {paginatedAppointments.map((appointment: Appointment, index: number) => (
            <AppointmentComponent key={index} appointment={appointment} />
          ))}
        </div>
      );
    } else {
      <NoResultsFound message={t('messages.noResultsFound')} />;
    }
  };

  // NOTE: In this appointments being undefined is equivalent to Loading state
  return (
    <AppointmentsPageLayout listLength={appointmentList.length}>
      {isLoading ? <Loading message={t('messages.loading')} /> : displayResults()}
    </AppointmentsPageLayout>
  );
};

export default Index;
