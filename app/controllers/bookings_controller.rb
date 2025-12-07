class BookingsController < ApplicationController
  def show
    @booking = Booking.find params[:id]
  end

  def new
    @booking = Booking.new
    params[:passengers].to_i.times { @booking.passengers.new }
  end

  def create
    @booking = Booking.new booking_params

    if @booking.save
      redirect_to @booking
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def booking_params
    params.expect booking: [ :flight_id, passengers_attributes: [[ :name, :email ]] ]
  end
end
