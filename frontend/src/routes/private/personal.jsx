import { useState } from "react";
import { EventsGrid } from "./events.style";
import { EventCard, Dialog } from "../../components/UI";
import useAuth from "../../hooks/useAuth";
import { Heading } from "../../components/UI";

const PersonalPage = () => {
  const { myEvents } = useAuth();
  const [openDialog, setOpenDialog] = useState(false);
  const [eventData, setEventData] = useState({});

  const getEvent = async (id) => {
    // console.log(myEvents);

    const event = myEvents.find((event) => event._id === id);
    console.log(event);
    setEventData(event);
  };

  return (
    <>
      <Heading>
        Eventos <span>Registrados</span>
      </Heading>
      <EventsGrid>
        {myEvents.length > 0 ? (
          myEvents.map((event) => (
            <EventCard
              data={event}
              key={event._id}
              onBtnClick={() => {
                getEvent(event._id);
                setOpenDialog(true);
              }}
            />
          ))
        ) : (
          <p>No te has registrado a ningun evento</p>
        )}
      </EventsGrid>

      {openDialog && (
        <Dialog setOpen={setOpenDialog} open={openDialog} data={eventData} />
      )}
    </>
  );
};

export default PersonalPage;
