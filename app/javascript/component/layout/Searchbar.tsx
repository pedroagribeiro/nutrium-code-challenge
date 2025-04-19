import Nutrium from '../../assets/nutrium.webp';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import LocaleSwitcher from '../ui/LocaleSwitcher';
import { useTranslation } from 'react-i18next';

type SearchbarProps = {
  setSearchTerm: (term: string) => void;
  setLocation: (location: string) => void;
  performSearch: () => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ setSearchTerm, setLocation, performSearch }) => {
  const { t } = useTranslation();

  return (
    <nav className="w-full flex flex-col">
      {/* Upper part of the nav */}
      <div className="w-full bg-gradient-to-r from-[#43c390] to-[#3cb696] px-2">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:px-8 py-6 bg-gradient-to-r from-[#4bcc96] to-[#3eb696]">
          {/* Nutrium logo on the left hand side */}
          <div className="flex items-center space-x-2">
            {/* <%= image_tag "nutrium.webp", alt: "Nutrium logo", class: "h-8 filter brightness-0 invert" %> */}
            <img src={Nutrium} alt="Nutrium logo" className="h-8 filter brightness-0 invert" />
          </div>
          {/* Text on the rigth hand side */}
          <div className="flex flex-row space-x-2 items-center">
            <div className="flex flex-col lg:flex-row items-center text-white text-lg font-medium space-x-2">
              <span>{t('appointments.topbar.teaser')}</span>
              <a href="#" className="underline hover:text-gray-100 flex items-center space-x-1">
                <span>{t('appointments.topbar.action')}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      {/* Upper part of the nav */}

      {/* Rest of the nav */}
      <div className="w-full bg-gradient-to-r from-[#31bb87] to-[#37a991] px-2">
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 lg:px-8 py-6 bg-gradient-to-r from-[#32be8c] to-[#3cb496]">
          {/* Left search box */}
          <input
            type="text"
            placeholder={t('appointments.searchbar.searchTermPlaceholder')}
            className="w-full bg-white border-none text-gray-600 p-4 rounded-sm shadow-md focus:ring-0"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Middle search box */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder={t('appointments.searchbar.locationPlaceholder')}
              className="w-full bg-white border-none text-gray-600 p-4 rounded-sm shadow-md pr-10 focus:ring-0"
              onChange={(e) => setLocation(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#19af91] items-center">
              <MapPinIcon className="h-5 w-5" />
            </div>
          </div>
          {/* Search button */}
          <button
            className="w-full lg:w-[20%] bg-[#e69b73] hover:bg-[#e68f60] text-white font-medium px-12 py-4 rounded-sm shadow-md"
            onClick={performSearch}
          >
            {t('appointments.searchbar.button')}
          </button>
        </div>
      </div>
      {/* Rest of the nav */}
    </nav>
  );
};

export default Searchbar;
