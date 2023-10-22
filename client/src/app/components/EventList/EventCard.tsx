import { FC, useState } from "react";
import { BetModal } from "@app/components";
import { eventType, IEventCardProps } from "./interfaces.ts";
import { imageMap } from "@app/components/EventList/constants.ts";

/**
 * EventCard Component
 *
 * The EventCard component is used to display individual events within the EventList.
 * Each card shows the event's details, including participants, category, and odds.
 * Users can select the odds and place a bet, which triggers a BetModal to appear,
 * allowing users to enter and confirm their bet.
 *
 * @param {IEventCardProps} {event} - The event data is passed as props to the component.
 * @param {Object} event - Contains information about the event, such as participants, odds, etc.
 * @returns {JSX.Element} A card displaying the event's information and options to place bets.
 *
 * @see BetModal
 */
const EventCard: FC<IEventCardProps> = ({ event }) => {
  const [selectOdds, setSelectOdds] = useState<number>(event.odds);
  const [showBetModal, setShowBetModal] = useState<boolean>(false);

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-t from-indigo-950 to-gray-950 rounded-xl overflow-hidden md:max-w-2xl mb-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="p-2 object-cover rounded-2xl md:h-36 md:w-48"
            src={imageMap[event.category as eventType]} alt="image"
          />
        </div>
        <div className="p-8 w-full uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
          <p>{event.first}</p>
          <p>vs</p>
          <p>{event.second}</p>
        </div>
      </div>
      <div className="p-4 border-t border-gray-800">
        <span className="text-gray-500 font-semibold">Odds: {selectOdds.toFixed(2)}</span>
        <div className="mt-2 flex space-x-3">
          <div className="flex space-x-3">
            <button
              onClick={() => setSelectOdds(event.odds - 0.2)}
              className="flex items-center justify-center px-4 py-2 rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              1
            </button>
            <button
              onClick={() => setSelectOdds(event.odds)}
              className="flex items-center justify-center px-4 py-2 rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              X
            </button>
            <button
              onClick={() => setSelectOdds(event.odds + 0.2)}
              className="flex items-center justify-center px-4 py-2 rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              2
            </button>
          </div>
          <button
            onClick={() => setShowBetModal(true)}
            className="flex w-full items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-lime-700 hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
            Place Your Bets
          </button>
        </div>
      </div>
      {showBetModal && <BetModal selectedOdds={selectOdds} closeModal={() => setShowBetModal(false)} />}
    </div>
  );
};

export default EventCard;
