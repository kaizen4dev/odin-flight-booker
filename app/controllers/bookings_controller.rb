class BookingsController < ApplicationController
  def show
    @booking = Booking.find params[:id]
  end

  def new
    @booking = Booking.new
    params[:passengers].to_i.times { @booking.passengers.new }
  end
end
