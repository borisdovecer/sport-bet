import _ from "lodash";
import { IEventResponse, ITransformedEvent } from "@app/global/interfaces.ts";

/**
 * transformEvents Function
 *
 * This utility function transforms an array of raw event response objects into a more manageable format
 * for rendering and further processing. Each event is transformed to extract the category, competitors,
 * and odds. The transformed events are then grouped by category.
 *
 * @param {IEventResponse[]} events - The array of raw event response objects fetched from the API or other sources.
 * @returns {_.Dictionary<ITransformedEvent[]>} - An object whose keys are event categories and values are arrays
 * of transformed events belonging to those categories.
 */
export const transformEvents = (events: IEventResponse[]): _.Dictionary<ITransformedEvent[]> => {
  const transform: ITransformedEvent[] = _.map(events, (event: IEventResponse): ITransformedEvent => {
    const split: string[] = _.split(event.event_name, ":");
    const [first, second] = _.split(split[1], "vs");

    return {
      category: split[0],
      first,
      second,
      odds: event.odds
    };
  });

  return _.groupBy(transform, "category");
};
