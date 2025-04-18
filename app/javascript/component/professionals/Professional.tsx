import type { Professional } from "../../types/professionals.types";
import WomanAvatar from "../../assets/woman_avatar.svg"; 
import Services from "./Services";
import { useState } from "react";
import ScheduleAppointmentDialog from "../appointments/ScheduleAppointmentDialog";
import { Link } from "@inertiajs/react";

const ProfessionalComponent: React.FC<Professional> = ({ id, name, license_number, professional_category, services }: Professional) => {
    const [serviceIndex, setServiceIndex] = useState<number>(0);
    const [scheduleAppointmentDialogOpen, setScheduleAppointmentDialogOpen] = useState<boolean>(false);

    return (
        <div className="w-full bg-white rounded-sm p-8">
            <div className="flex flex-col gap-4 lg:gap-0 items-center lg:items-start lg:flex-row lg:space-x-4">

                {/* Profile picture */}
                <div className="max-w-[30%] lg:w-[10%]">
                    <img src={WomanAvatar} alt="Avatar" className="w-full h-auto rounded-full" />
                </div>
                {/* Description */}
                <div className="flex flex-col flex-grow min-w-[60%]">
                    <div className="flex flex-col flex-grow">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-[#19af91] bg-[#e6f8f4] px-4 py-2 rounded-full font-semibold">★ FOLLOW-UP</span>
                        </div>
                        <h2 className="text-3xl font-semibold text-[#19af91] mt-1">{name}</h2>
                        <p className="text-lg text-gray-500">{professional_category.name} • {license_number}N</p>
                    </div>
                    {services.length > 0 && <Services serviceIndex={serviceIndex} setServiceIndex={setServiceIndex} services={services} />}
                </div>
                {/* Actions */}
                <div className="w-full lg:w-[25%] space-y-2 text-lg font-medium">
                    <button
                        className="w-full bg-[#fae6e1] text-[#e6a179] py-2 rounded"
                        onClick={() => setScheduleAppointmentDialogOpen(true)}
                    >
                        Schedule appointment
                    </button>
                    <button className="w-full bg-[#dbf6e7] text-[#19af91] py-2 rounded">
                        <Link href={`/professionals/${id}`} className="text-[#19af91]">
                            Website
                        </Link>
                    </button>
                </div>
            </div>
            <ScheduleAppointmentDialog
                isOpen={scheduleAppointmentDialogOpen}
                setOpen={setScheduleAppointmentDialogOpen}
                professionalId={id}
                services={services}
            />
        </div>
    )
}

export default ProfessionalComponent;