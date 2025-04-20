import { useForm } from '@inertiajs/react';
import { Service } from '../../types/services.types';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AppointmentAlert from './AppointmentAlert';
import Loading from '../ui/Loading';

type ScheduleAppointmentFormData = {
  professionalId: number;
  services: Service[];
};

const ScheduleAppointmentForm: React.FC<ScheduleAppointmentFormData> = ({
  professionalId,
  services,
}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [userInformed, setUserInformed] = React.useState<boolean>(true);

  const { data, setData, post, processing, errors, transform } = useForm({
    name: '',
    email: '',
    date: '',
    time: '',
    professional_id: '',
    service_id: services[0].id,
  });

  transform((data) => {
    const dateTimeString = `${data.date}T${data.time}`;
    const momentDate = moment(dateTimeString);
    return {
      ...data,
      professional_id: professionalId,
      date: momentDate,
    };
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/appointments', {
      only: ['appointments', 'newAppointment'],
      preserveUrl: true,
      replace: true,
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        console.log('success');
        setSuccess(true);
        setLoading(false);
      },
      onError: (errors) => {
        console.log(errors);
        setSuccess(false);
        setLoading(false);
      },
      onStart: () => {
        setLoading(true);
      },
      onFinish: () => {
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
      <form onSubmit={submit} className="flex flex-col items-center justify-center w-full p-8">
        <div className="w-full md:flex md:items-center mb-6">
          <div className="flex justify-start md:w-1/4">
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              {t('appointments.scheduleForm.name')}
            </label>
          </div>
          <div className="md:w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-sm w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#19af91] focus:ring-0"
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
          </div>
        </div>
        {errors.name && <div>{errors.name}</div>}

        <div className="w-full md:flex md:items-center mb-6">
          <div className="flex justify-start md:w-1/4">
            <label
              htmlFor="email"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Email
            </label>
          </div>
          <div className="md:w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#19af91] focus:ring-0"
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
          </div>
        </div>
        {errors.email && <div>{errors.email}</div>}

        <div className="w-full md:flex md:items-center mb-6">
          <div className="flex justify-start md:w-1/4">
            <label
              htmlFor="date"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              {t('appointments.scheduleForm.date')}
            </label>
          </div>
          <div className="md:w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#19af91] focus:ring-0"
              id="date"
              type="date"
              value={data.date}
              onChange={(e) => setData('date', e.target.value)}
            />
          </div>
        </div>
        {errors.date && <div>{errors.date}</div>}

        <div className="w-full md:flex md:items-center mb-6">
          <div className="flex justify-start md:w-1/4">
            <label
              htmlFor="time"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              {t('appointments.scheduleForm.time')}
            </label>
          </div>
          <div className="md:w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#19af91] focus:ring-0"
              id="time"
              type="time"
              value={data.time}
              onChange={(e) => setData('time', e.target.value)}
            />
          </div>
        </div>
        {errors.time && <div>{errors.time}</div>}

        <div className="w-full md:flex md:items-center mb-6">
          <div className="flex justify-start md:w-1/4">
            <label
              htmlFor="service"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              {t('appointments.scheduleForm.service')}
            </label>
          </div>
          <div className="md:w-full">
            <select
              className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#19af91] focus:ring-0"
              id="service"
              value={data.service_id}
              onChange={(e) => setData('service_id', Number(e.target.value))}
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {errors.time && <div>{errors.time}</div>}

        <button
          type="submit"
          disabled={processing}
          className="bg-[#19af91] text-white py-2 px-4 mt-8 font-bold rounded-sm"
        >
          {t('appointments.scheduleForm.button')}
        </button>
      </form>
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

export default ScheduleAppointmentForm;
