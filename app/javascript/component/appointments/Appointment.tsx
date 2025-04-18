import React from "react";
import { Appointment } from "../../types/appointments.types";
import ManAvatar from "../../assets/man_avatar.svg"
import { CalendarDateRangeIcon, ClockIcon } from "@heroicons/react/24/outline";
import AppointmentDialog from "./AppointmentDialog";
import { dateToCalendarDate, dateToClockTime } from "../../utils/date"

type AppointmentProps = {
    appointment: Appointment
}

const AppointmentComponent: React.FC<AppointmentProps> = ({ appointment }) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
        <div className="flex flex-col rounded-sm border-1 border-gray-300">
            <div className="w-full flex flex-row gap-6 p-6">
                {/* Image */}
                <div className="w-[35%]">
                    <img src={ManAvatar} alt="Man Avatar Image" className="w-full h-auto rounded-full" />
                </div>
                {/* Information */}
                <div className="w-full flex flex-col space-y-6 text-gray-500 pt-2">
                    <div className="gap-2 max-w-[85%] overflow-clip">
                        <p className="text-2xl">{appointment.name}</p>
                        <p>{appointment.service.name}</p>
                    </div>
                    <div className="gap-2">
                        <div className="flex flex-row space-x-2 items-center">
                            <div className="p-1 rounded-full bg-[#dcfaf0]">
                                <CalendarDateRangeIcon className="w-4 h-4 text-[#19af91]" />
                            </div>
                            <p>{dateToCalendarDate(appointment.date)}</p>
                        </div>
                        <div className="flex flex-row space-x-2 items-center">
                            <div className="p-1 rounded-full bg-[#dcfaf0]">
                                <ClockIcon className="w-4 h-4 text-[#19af91]" />
                            </div>
                            <p>{dateToClockTime(appointment.date)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-grow" />
            <button onClick={() => setDialogOpen(!dialogOpen)} className="text-[#20b194] text-lg font-semibold border-t-1 border-gray-300 py-3 bt-1 hover:bg-gray-100">
                Answer request
            </button>
            <AppointmentDialog
                isOpen={dialogOpen}
                setOpen={setDialogOpen}
                appointment={appointment}
            />
        </div>
    )
}

export default AppointmentComponent;