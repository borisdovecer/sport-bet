export interface IPage {
  name: string,
  path: string,
  element: () => JSX.Element,
  permissions: string[],
  header: boolean,
}

export interface ILoginResponse {
  username: string;
  token: string;
}

export interface IEventResponse {
  createdAt: string;
  event_id: number;
  event_name: string;
  odds: number;
  updatedAt: string;
}

export interface ITransformedEvent {
  category: string;
  first: string;
  second: string;
  odds: number;
}

