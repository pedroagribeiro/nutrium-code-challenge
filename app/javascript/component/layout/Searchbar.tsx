import Nutrium from "../../assets/nutrium.webp"
import { MapPinIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';


const Searchbar: React.FC = () => {
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
                    <div className="flex flex-col lg:flex-row items-center text-white text-lg font-medium space-x-2">
                        <span>Are you a nutrition professional?</span>
                        <a href="#" className="underline hover:text-gray-100 flex items-center space-x-1">
                            <span>Get to know our software</span>
                            <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Upper part of the nav */}

            {/* Rest of the nav */}
            <div className="w-full bg-gradient-to-r from-[#31bb87] to-[#37a991] px-2">
                <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 lg:px-8 py-6 bg-gradient-to-r from-[#32be8c] to-[#3cb496]">
                    {/* Left search box */}
                    <input type="text" placeholder="Name, service, online appointment..." className="w-full bg-white text-gray-600 p-4 rounded-sm shadow-md focus:outline-none" />
                    {/* Middle search box */}
                    <div className="relative w-full">
                        <input type="text" placeholder="Location" className="w-full bg-white text-gray-600 p-4 rounded-sm shadow-md pr-10 focus:outline-none" />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#19af91] items-center">
                            <MapPinIcon className="h-5 w-5" />
                        </div>
                    </div>
                    {/* Search button */}
                    <button className="bg-[#e69b73] hover:bg-orange-500 text-white font-medium px-12 py-4 rounded-sm shadow-md">
                        Search
                    </button>
                </div>
            </div>
            {/* Rest of the nav */}

        </nav>
    )
}

export default Searchbar;