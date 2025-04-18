import { Professional } from "./professionals.types"
import { Service } from "./services.types"

export type Appointment = {
    id: number
    name: string
    email: string
    date: Date
    status: AppointmentStatus
    professional: Professional
    service: Service
}

export enum AppointmentStatus {
    Pending = 0,
    Accepted = 1,
    Rejected = 2,
}