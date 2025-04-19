import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const AppointmentsBar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between m-6 text-gray-500">
      <div>
        <h1 className="text-2xl font-semibold">{t('appointments.title')}</h1>
        <p className="text-sm">{t('appointments.subtitle')}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 rounded-xs border-1 border-gray-300 hover:bg-gray-200">
            <ChevronLeftIcon className="w-3 h-3 text-gray-600" />
          </button>
          <button className="px-2 py-1 rounded-xs border-1 border-gray-300 hover:bg-gray-200">
            <ChevronRightIcon className="w-3 h-3 text-gray-600" />
          </button>
        </div>
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
