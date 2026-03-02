class PassengerMailer < ApplicationMailer
  default from: "no-reply@example.com"

  def confirmation_email
    @passenger = params[:passenger]
    @booking = @passenger.booking
    mail(to: @passenger.email, subject: "You have successfully booked a flight!")
  end
end
