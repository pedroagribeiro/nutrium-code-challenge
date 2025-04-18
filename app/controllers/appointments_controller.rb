class AppointmentsController < ApplicationController
  def index
    professional_id = params[:professional_id]
    status = params[:status]

    appointments = Appointment.includes(:professional, :service).all

    appointments = appointments.where(professional_id: professional_id) if professional_id.present?
    appointments = appointments.where(status: status) if status.present?

    render inertia: 'Appointments/Index', props: {
      appointments: appointments.as_json(include: [:professional, :service])
    }
  end

  def create
    appointment = Appointment.new(appointment_params)
    appointment.status = 0

    if appointment.save
      render inertia: 'Appointments/Index', props: {
        newAppointment: appointment.as_json(include: [:professional, :service])
      }, status: :created
    else
      render inertia: 'Appointments/Index', props: {
        errors: appointment.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def update
    if params[:id].blank?
      return render inertia: 'Appointments/Index', props: {
        errors: ['ID is required']
      }, status: :unprocessable_entity
    end

    if appointment_update_params.empty?
      return render inertia: 'Appointments/Index', props: {
        errors: ['No fields provided for update']
      }, status: :unprocessable_entity
    end

    appointment = Appointment.find(params[:id])
    unless appointment
      return render inertia: 'Appointments/Index', props: {
        errors: ['Appointment not found']
      }, status: :not_found
    end

    if appointment.update(appointment_update_params)
      send_status_email(appointment)
      return render inertia: 'Appointments/Index', props: {
        updatedAppointment: appointment.as_json(include: [:professional, :service])
      }
    else
      return render inertia: 'Appointments/Index', props: {
        errors: appointment.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  private
    def appointment_params
      params.require(:appointment).permit(:name, :email, :date, :professional_id, :service_id)
    end

    def appointment_update_params
      params.require(:appointment).permit(:status)
    end

    def send_status_email(appointment)
      AppointmentsMailer.status_update(appointment).deliver_later
    end

end
