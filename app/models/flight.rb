class Flight < ApplicationRecord
  belongs_to :arrival_airport, class_name: "Airport"
  belongs_to :departure_airport, class_name: "Airport"

  default_scope { order :start }

  def self.days
    select("start").map { |f| f.start.strftime "%Y-%m-%d" }.uniq.sort
  end
end
