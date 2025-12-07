class Flight < ApplicationRecord
  belongs_to :arrival_airport, class_name: "Airport"
  belongs_to :departure_airport, class_name: "Airport"
  has_many :bookings
  has_many :passengers, through: :bookings

  default_scope { order :start }

  def self.days
    select("start").map { |f| f.start.strftime "%Y-%m-%d" }.uniq.sort
  end
end
