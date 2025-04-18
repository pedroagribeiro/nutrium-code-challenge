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
end
