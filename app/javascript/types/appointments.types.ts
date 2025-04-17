import { Professional } from "./professionals.types"
import { Service } from "./services.types"

export type Appointment = {
    name: string
    email: string
    date: Date
    status: number
    professional: Professional
    service: Service
}