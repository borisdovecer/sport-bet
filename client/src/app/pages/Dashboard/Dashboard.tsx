import { useQuery } from "react-query";
import { EventList } from "@app/components";
import { fetchEvents } from "@app/services/api.ts";
import { IEventResponse } from "@app/global/interfaces.ts";

/**
 * Dashboard Component
 *
 * This component is the main view for the dashboard page. It uses React Query's `useQuery` hook to fetch
 * events from the API asynchronously. While the data is loading, a loading message is displayed. If there
 * is an error during fetching, an error message is shown. Once the data is successfully fetched, it is passed
 * to the `EventList` component to display the events on the page.
 *
 * The dashboard is structured into two main sections. The first section contains a title and a subtitle. The
 * second section is where the `EventList` component is rendered to display the fetched events.
 *
 * @returns {JSX.Element} - A JSX element rendering the dashboard, including loading and error states, as
 * well as the event list when data is successfully fetched.
 *
 * @see fetchEvents
 * @see EventList
 */
const Dashboard = () => {
  const { data: events, error, isLoading } = useQuery("events", () =>
    fetchEvents().then((res: IEventResponse[]) => res)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred: {error.toString()}</p>;
  }

  return (
    <div>
      <div className='flex'>
        <div className='w-full text-center mb-4 ml-24'>
          <h1 className="text-5xl p-4 text-gray-200">Sport Bet</h1>
          <p className="text-gray-300">Take your chance</p>
        </div>
      </div>
      <div className="flex">
        <div className='ml-24 p-4 w-full'>
          <EventList events={events || []} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
