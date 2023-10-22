import {IEventResponse, ITransformedEvent} from "@app/global/interfaces.ts";

export type eventType = "Soccer" | "Basketball" | "Tennis" | "Hockey";
export type imageMapType = { [key: string]: string }

export interface IEventCardProps {
  event: ITransformedEvent
}

export interface IEventListProps {
  events: IEventResponse[]
}
