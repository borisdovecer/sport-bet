import _ from "lodash";
import { FC } from "react";
import EventCard from "./EventCard.tsx";
import { ITransformedEvent } from "@app/global/interfaces.ts";
import { transformEvents } from "@app/components/EventList/helpers.ts";
import { IEventListProps } from "@app/components/EventList/interfaces.ts";

/**
 * BetModal Component
 *
 * This is a modal component for placing bets. It accepts the selected odds and a callback function to close the modal as props.
 * Users can input the amount they want to bet, and the component calculates the potential win based on the selected odds.
 * After a bet is placed, a confirmation message is displayed, and the modal closes automatically after a short delay.
 *
 * @param {BetModalProps} {selectedOdds, closeModal} - The props passed to the component.
 * @param {number} selectedOdds - The odds selected by the user for the bet.
 * @param {Function} closeModal - A callback function to close the modal.
 * @returns {JSX.Element} The rendered BetModal component.
 *
 * @see EventCard
 * @see transformEvents
 */
const EventList: FC<IEventListProps> = ({events}) => {
  const transformed: _.Dictionary<ITransformedEvent[]> = transformEvents(events);

  return (
    <div>
      {_.isEmpty(events) ?
        <div className="text-center text-gray-200 text-xl p-12">There are no events now... try to login first</div>
        :
        <>
          {_.map(transformed, (value: ITransformedEvent[], key: string) => (
            <div key={key} className="py-4 w-full">
              <h1 className="py-4 text-3xl text-gray-200 font-bold">{key}</h1>
              <div className='grid grid-cols-3 gap-3'>
                {_.map(value, (event: ITransformedEvent, index: number) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </div>
          ))}
        </>
      }
    </div>
  );
};

export default EventList;
