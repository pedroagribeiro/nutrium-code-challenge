class AppointmentsController < ApplicationController
  def index
    appointments = Appointment.includes(:professional, :service).all
    render inertia: 'Appointments/Index', props: {
      appointments: appointments.as_json(include: [:professional, :service])
    }
  end
end
