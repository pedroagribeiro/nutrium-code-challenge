import { DialogTitle } from '@headlessui/react';
import { CalendarDateRangeIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Appointment, AppointmentStatus } from '../../types/appointments.types';
import { dateToCalendarDate, dateToClockTime } from '../../utils/date';
import { router } from '@inertiajs/react';
import Loading from '../ui/Loading';
import AppointmentAlert from './AppointmentAlert';

type AppointmentFormProps = {
  appointment: Appointment;
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({ appointment }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [userInformed, setUserInformed] = React.useState<boolean>(true);

  const handleAccept = () => {
    router.visit(`/appointments/${appointment.id}`, {
      method: 'put',
      data: { id: appointment.id, status: AppointmentStatus.Accepted },
      preserveScroll: true,
      preserveState: true,
      only: ['updatedAppointment'],
      preserveUrl: true,
      onSuccess: () => {
        setSuccess(true);
        setLoading(false);
      },
      onError: () => {
        setSuccess(false);
        setLoading(false);
      },
      onStart: () => {
        setLoading(true);
      },
      onFinish: () => {
        // setOpen(false);
        setAlertOpen(true);
        setUserInformed(false);
      },
    });
  };

  const handleReject = () => {
    router.visit(`/appointments/${appointment.id}`, {
      method: 'put',
      data: { id: appointment.id, status: AppointmentStatus.Rejected },
      preserveScroll: true,
      preserveState: true,
      only: ['updatedAppointment'],
      preserveUrl: true,
      onSuccess: () => {
        setSuccess(true);
        setLoading(false);
      },
      onError: () => {
        setSuccess(false);
        setLoading(false);
      },
      onStart: () => {
        setLoading(true);
      },
      onFinish: () => {
        // setOpen(false);
        setAlertOpen(true);
        setUserInformed(false);
      },
    });
  };

  const dismissAlertFunction = () => {
    setUserInformed(true);
    setAlertOpen(false);
  };

  const displayForm = () => {
    return (
      <div>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start text-gray-500">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-[#dbf6e7] sm:mx-0 sm:size-10">
              <CheckCircleIcon aria-hidden="true" className="size-6 text-[#19af91]" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <DialogTitle as="h3" className="text-base font-semibold text-[#20b194]">
                {t('appointments.answerDialog.title')}
              </DialogTitle>
              <div className="mt-2">
                <p className="text-sm">{t('appointments.answerDialog.subtitle')}</p>
              </div>
              <div className="flex flex-col space-y-2 pt-6">
                <div className="gap-2 max-w-[85%] overflow-clip">
                  <p className="text-2xl">{appointment.name}</p>
                  <p>{appointment.service.name}</p>
                </div>
                <div className="gap-2">
                  <div className="flex flex-row space-x-2 items-center">
                    <div className="p-1 rounded-full bg-[#dcfaf0]">
                      <CalendarDateRangeIcon className="w-4 h-4 text-[#19af91]" />
                    </div>
                    <p>{dateToCalendarDate(appointment.date)}</p>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <div className="p-1 rounded-full bg-[#dcfaf0]">
                      <ClockIcon className="w-4 h-4 text-[#19af91]" />
                    </div>
                    <p>{dateToClockTime(appointment.date)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 text-gray-600">
          <button
            className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={handleReject}
            disabled={loading}
          >
            {t('appointments.answerDialog.reject')}
          </button>
          <button
            className="inline-flex w-full justify-center rounded-md bg-[#19af91] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
            onClick={handleAccept}
            disabled={loading}
          >
            {t('appointments.answerDialog.accept')}
          </button>
          <button
            type="button"
            data-autofocus
            // onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full justify-center rounded-sm bg-white px-3 py-2 text-sm font-semibold shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            {t('appointments.answerDialog.cancel')}
          </button>
        </div>
      </div>
    );
  };

  const displayContent = () => {
    if (loading) {
      return <Loading message="Submitting request..." />;
    }
    if (!userInformed) {
      return (
        <AppointmentAlert
          success={success}
          successMessage={t('appointments.updateAlert.success')}
          errorMessage={t('appointments.updateAlert.error')}
          isOpen={alertOpen}
          setOpen={setAlertOpen}
          dismiss={dismissAlertFunction}
          dismissMessage={t('appointments.updateAlert.forward')}
        />
      );
    }
    return displayForm();
  };

  return displayContent();
};

export default AppointmentForm;
