import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useAppointmentsPagination } from '../../context/AppointmentsPaginationContext';

type AppointmentsPaginator = {
  listLength: number;
};

const AppointmentsPaginator: React.FC<AppointmentsPaginator> = ({ listLength }) => {
  const { setPreviousPage, setNextPage, existsPreviousPage, existsNextPage } =
    useAppointmentsPagination();
  return (
    <div className="flex items-center gap-1">
      <button
        className="px-2 py-1 rounded-xs border-1 text-gray-600 border-gray-300 hover:bg-gray-200 disabled:bg-gray-200"
        onClick={() => setPreviousPage()}
        disabled={!existsPreviousPage()}
      >
        <ChevronLeftIcon className="w-3 h-3" />
      </button>
      <button
        className="px-2 py-1 rounded-xs border-1 border-gray-300 hover:bg-gray-200 disabled:bg-gray-200"
        onClick={() => setNextPage()}
        disabled={!existsNextPage(listLength)}
      >
        <ChevronRightIcon className="w-3 h-3 text-gray-600" />
      </button>
    </div>
  );
};

export default AppointmentsPaginator;
