import { ArrowRightIcon } from '@heroicons/react/24/outline';
import LocaleSwitcher from '../ui/LocaleSwitcher';
import Nutrium from '../../assets/nutrium.webp';
import { useTranslation } from 'react-i18next';

const Bar: React.FC = () => {
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
    </nav>
  );
};

export default Bar;
