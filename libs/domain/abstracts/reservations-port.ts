import { ReservationEntity } from '../entities/reservation.entity';

export interface ReservationsPort {
  getAllReservations(): ReservationEntity[];
  get(id: string): ReservationEntity | null;
  getByParkingSpotId(id: string): Promise<ReservationEntity[]>;
  add(reservation: ReservationEntity): void;
  remove(reservation: ReservationEntity): void;
}