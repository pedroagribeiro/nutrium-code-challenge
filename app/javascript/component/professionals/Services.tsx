import { BanknotesIcon, BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline';
import type { Service } from '../../types/services.types';

type ServicesProps = {
  serviceIndex: number;
  setServiceIndex: (index: number) => void;
  services: Service[];
};

const Services: React.FC<ServicesProps> = ({ serviceIndex, services }) => {
  if (services == null || services.length === 0) {
    return <></>;
  }

  return (
    <div className="pt-12 flex flex-col lg:flex-row flex-grow justify-between">
      {/* Location */}
      <div className="w-1/2 flex flex-row gap-2 space-y-3 text-lg">
        <MapPinIcon className="w-6 h-6 text-[#19af91]" />
        <div className="flex flex-col gap-3">
          <p className="text-[#19af91] font-semibold">Online Follow-Up</p>
          <p className="text-gray-400">{services[serviceIndex].address}</p>
          <p className="text-gray-400">{services[serviceIndex].city}</p>
        </div>
      </div>
      {/* Appointment price */}
      <div className="flex flex-col w-1/2  space-y-4 items-start text-lg text-gray-400">
        <div className="flex gap-2 items-center">
          <BriefcaseIcon className="w-6 h-6 text-[#19af91]" />
          <span>{services[serviceIndex].name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <BanknotesIcon className="w-6 h-6 text-[#19af91]" />
          <span>€ {services[serviceIndex].price}</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
