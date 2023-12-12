import { useLoaderData } from "react-router-dom";
import { Dialog, EventCard } from "../../components/UI";
import axiosClient from "../../config/libraries/axios";
import { useState } from "react";

import { EventsGrid } from "./events.style";
import { Heading } from "../../components/UI";

export const loader = async () => {
  try {
    //At this point, the token does exist
    const token = localStorage.getItem("token");

    const { data } = await axiosClient(`/events`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};

const EventsPage = () => {
  const events = useLoaderData([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [eventData, setEventData] = useState({});

  const getEvent = async (id) => {
    const event = events.find((e) => e._id === id);
    console.log(event);

    setEventData(event);
  };

  return (
    <>
      <Heading>
        Eventos <span>Disponibles</span>
      </Heading>
      <EventsGrid>
        {events.map((event) => (
          <EventCard
            data={event}
            key={event._id}
            onBtnClick={() => {
              setOpenDialog(true);
              getEvent(event._id);
            }}
          />
        ))}
      </EventsGrid>
      {openDialog && (
        <Dialog setOpen={setOpenDialog} open={openDialog} data={eventData} />
      )}
    </>
  );
};

export default EventsPage;
