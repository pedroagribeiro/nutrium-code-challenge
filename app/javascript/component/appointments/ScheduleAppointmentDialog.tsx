import { CalendarIcon } from "@heroicons/react/24/outline";
import { Service } from "../../types/services.types";
import ModalDialog from "../ui/ModalDialog";
import ScheduleAppointmentForm from "./ScheduleAppointmentForm";
import { DialogTitle } from "@headlessui/react";
import { useTranslation } from "react-i18next";

type ScheduleAppointmentDialogProps = {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    professionalId: number
    services: Service[]
}

const ScheduleAppointmentDialog: React.FC<ScheduleAppointmentDialogProps> = ({ isOpen, setOpen, professionalId, services }) => {
    const { t } = useTranslation()

    return (
        <ModalDialog isOpen={isOpen} setOpen={setOpen}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start text-gray-500">
                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-[#dbf6e7] sm:mx-0 sm:size-10">
                        <CalendarIcon aria-hidden="true" className="size-6 text-[#19af91]" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle as="h3" className="text-base font-semibold text-[#20b194]">
                            {t('appointments.scheduleForm.title')}
                        </DialogTitle>
                        <div className="mt-2">
                            <p className="text-sm">
                                {t('appointments.scheduleForm.description')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 pt-6">
                    <ScheduleAppointmentForm professionalId={professionalId} services={services}/>
                </div>
            </div>
        </ModalDialog>
    )
}

export default ScheduleAppointmentDialog;