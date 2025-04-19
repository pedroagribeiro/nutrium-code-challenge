import i18n, { availableLanguages } from "../../utils/i18n";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const LocaleSwitcher = () => {

    return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center rounded-sm px-4 text-sm font-bold text-white hover:text-gray-100 focus:outline-none bg-transparent hover:bg-transparent">
            <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-row space-x-2 items-center w-4 h-4">
                    <p>{i18n.language.toUpperCase()}</p>
                </div>
            </div>
            <ChevronDownIcon
                className="-mr-1 ml-2 h-4 w-4"
                aria-hidden="true"
            />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 font-bold">
            {availableLanguages.map((locale) => (
                <Menu.Item key={locale}>
                {({ active }) => (
                <button
                    className={`${
                    active ? 'bg-[#19af91] text-white' : 'text-gray-500'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => {
                    i18n.changeLanguage(locale);
                    localStorage.setItem('locale', locale);
                    }}
                >
                    <div className="flex flex-row space-x-2 items-center">
                        <GlobeAltIcon className="h-4 w-4" />
                        <p>{locale.toUpperCase()}</p>
                    </div>
                </button>
                )}
                </Menu.Item>
            ))}
            </div>
        </Menu.Items>
      </Transition>
    </Menu>
    )

}

export default LocaleSwitcher;

// const LocaleSwitcher = () => {
//     const { i18n } = useTranslation();
//     const dropdownRef = useRef();

//     const currentLocale = i18n.language;

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleLocaleChange = (locale) => {
//     i18n.changeLanguage(locale);
//     localStorage.setItem('locale', locale);
//     setOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       <button
//         type="button"
//         className="inline-flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
//         onClick={() => setOpen(!open)}
//       >
//         🌐 {currentLocale.toUpperCase()}
//         <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//           <path
//             fillRule="evenodd"
//             d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.66a.75.75 0 01-1.08 0l-4.25-4.66a.75.75 0 01.02-1.06z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       {open && (
//         <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             {availableLanguages.map((locale) => (
//               <button
//                 key={locale}
//                 onClick={() => handleLocaleChange(locale)}
//                 className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
//                   locale === currentLocale ? 'font-semibold text-blue-600' : ''
//                 }`}
//               >
//                 {locale.toUpperCase()}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LocaleSwitcher;