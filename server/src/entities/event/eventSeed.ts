import Event from "./eventModel";
import { IEvent } from "./eventInterface";

/**
 * Seeds the database with an initial set of sports events data. This function is used to populate
 * the database with a set of predefined events, each with a unique ID, name, and associated odds,
 * ensuring the database is ready for use upon application setup or reset.
 *
 * @returns A Promise that resolves to void after all events have been added to the database.
 * In the case of an error during the seeding process, an exception will be thrown,
 * and needs to be handled by the calling function or process.
 */
export const seedEvents = async (): Promise<void> => {
  const events: IEvent[] = [
    { event_id: 1, event_name: "Soccer: Partizan vs Crvena Zvezda", odds: 1.75 },
    { event_id: 2, event_name: "Basketball: KK Viimsi vs Rapla KK", odds: 2.4 },
    { event_id: 3, event_name: "Tennis: Lorenzo Sonego vs Vitaliy Sachko", odds: 1.1 },
    { event_id: 4, event_name: "Hockey: Langnau vs Lausanne", odds: 4.2 },
    { event_id: 5, event_name: "Soccer: Barcelona vs Real Madrid", odds: 2.5 },
    { event_id: 6, event_name: "Basketball: Igokea vs Cedevita Olimpija", odds: 4.5 },
    { event_id: 7, event_name: "Basketball: Landstede Hammers vs BAL Weert", odds: 3.1 },
    { event_id: 8, event_name: "Soccer: Liverpool vs Manchester United", odds: 2.0 },
    { event_id: 9, event_name: "Hockey: Buffalo Sabres vs New York Islanders", odds: 1.5 },
    { event_id: 10, event_name: "Tennis: Lorenzo Sonego vs Alexandre Muller", odds: 1.3 },
  ];

  for (const event of events) {
    await Event.create(event);
  }
};
