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
        <Menu.Items className="absolute z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 font-bold">
            {availableLanguages.map((locale) => (
                <Menu.Item key={locale}>
                {({ active }) => (
                <button
                    className={`${
                    active ? 'text-[#19af91] ' : 'text-gray-500'
                    } group flex w-full items-center rounded-sm px-2 py-2 text-sm`}
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