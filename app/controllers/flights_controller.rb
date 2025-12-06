class FlightsController < ApplicationController
  def index
    @flights = Flight.all.where(airports())
  end

  private

  def airports
    params.permit :departure_airport, :arrival_airport
  end
end
