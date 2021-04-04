class Api::GuestReservationsController < ApplicationController
  def index
    guests = Guest.all.includes(:reservations)
    render json: guests, include: [:reservations]
  end

  def create
    data = import_params.to_h
    reservation = GuestReservationsImporter::Service.call(data)
    render json: reservation, include: [:guest]
  end

  private

  def import_params
    params.permit!
  end
end