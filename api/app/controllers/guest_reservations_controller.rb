class GuestReservationsController < ApplicationController
  def create
    data = params
    reservation = GuestReservationsImporter.call(data)
    render json: reservation, include: [:guest]
  end
end