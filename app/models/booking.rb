class Booking < ApplicationRecord
  belongs_to :flight
  has_many :passengers

  accepts_nester_attributes_for :passengers
end
