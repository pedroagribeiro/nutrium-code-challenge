class AppointmentsMailer < ApplicationMailer
  def status_update(appointment)
    @appointment = appointment

    mail(
      to: @appointment.email,
      subject: "Appointment #{@appointment.id} status update",
      template_path: 'appointments_mailer',
      template_name: 'status_update'
    )
  end
end
