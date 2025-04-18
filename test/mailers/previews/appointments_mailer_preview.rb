# Preview all emails at http://localhost:3000/rails/mailers/appointments_mailer
class AppointmentsMailerPreview < ActionMailer::Preview
  def status_update
    appointment = Appointment.first || Appointment.new(id: 1, name: "Test User", email: "test@example.com", status: 1)
    AppointmentsMailer.status_update(appointment)
  end
end
