import { ArrowPathIcon, ShareIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import AppointmentPaginator from '../navigation/AppointmentPaginator';

type AppointmentsBarProps = {
  setPreviousPage: () => void;
  setNextPage: () => void;
  existsPreviousPage: () => boolean;
  existsNextPage: () => boolean;
};

const AppointmentsBar: React.FC<AppointmentsBarProps> = ({
  setPreviousPage,
  setNextPage,
  existsPreviousPage,
  existsNextPage,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-center lg:gap-0 lg:flex-row lg:justify-between m-6 text-gray-500">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-2xl font-semibold">{t('appointments.title')}</h1>
        <p className="text-sm">{t('appointments.subtitle')}</p>
      </div>
      <div className="flex items-center gap-4">
        <AppointmentPaginator
          setPrevious={setPreviousPage}
          existsPrevious={existsPreviousPage}
          setNext={setNextPage}
          existsNext={existsNextPage}
        />
        <button className="px-2 py-1 rounded-xs border-1 border-gray-300 hover:bg-gray-200">
          <ShareIcon className="w-3 h-3 text-gray-600" />
        </button>
        <button className="px-2 py-1 rounded-xs border-1 border-gray-300 hover:bg-gray-200">
          <ArrowPathIcon className="w-3 h-3 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default AppointmentsBar;
