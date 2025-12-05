# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

  ["NYC", "SFO", "UOE", "HNT", "TML", "KOR"].each do |airport_code|
    Airport.find_or_create_by! code: airport_code
  end

  Airport.first(6).each do |departure_airport|
    Airport.first(6).each do |arrival_airport|
      next if departure_airport.id == arrival_airport.id
      start_time = Time.now + rand(30).days + rand(24).hours
      duration = "#{rand(12)} hour(s)"

      Flight.find_or_create_by! arrival_airport: arrival_airport, departure_airport: departure_airport, start: start_time, duration: duration
    end
  end
