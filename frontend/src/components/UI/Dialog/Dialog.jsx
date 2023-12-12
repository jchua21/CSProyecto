import { useState, useEffect, useRef, Fragment } from "react";
import { Link, useFetcher } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import Spinner from "../Spinner/Spinner";

import {
  DialogTitle,
  DialogImage,
  DialogInf,
  DialogButton,
  DialogActions,
} from "./Dialog.style";
import { formatDate } from "../../../helpers";

export default function ScrollDialog({ open, setOpen, data = {} }) {
  //Get user info
  const { user, myEvents } = useAuth();

  //Change dialog scroll
  const [scroll, setScroll] = useState("paper");

  // Fetcher to register for event
  const fetcher = useFetcher();

  const isEnrolled = myEvents.some((e) => e._id === data._id);

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{`${data?.nombre}`}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            as="div"
          >
            <DialogImage
              src={`${data?.urlImage}`}
              alt={`Image ${data?.nombre}`}
            />

            <DialogInf>
              <p>
                Author:
                {/* <Link to={`/doctor/${data?.id}`}></Link> */}
                <span> {`${data.user?.nombre}`}</span>
              </p>

              <p>
                Disponibles:{" "}
                <span>{data?.aforo > 0 ? data?.aforo : "Agotado"}</span>
              </p>

              <p>
                Fecha y Hora:{" "}
                <span>{data?.datetime ? formatDate(data?.datetime) : ""}</span>
              </p>
            </DialogInf>

            <p>{data?.descripcion}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogButton onClick={handleClose} variant="secondary">
            Cancelar
          </DialogButton>

          <fetcher.Form method="post" action="/enroll">
            <DialogButton type="submit" variant="primary" forwardedAs="button">
              {fetcher.state === "submitting" ? (
                <Spinner />
              ) : isEnrolled ? (
                "Desinscribirse"
              ) : (
                "Inscribirse"
              )}
            </DialogButton>
            <input type="hidden" name="eventId" value={data._id ?? ""} />
            <input type="hidden" name={`isEnrolled`} value={isEnrolled} />
          </fetcher.Form>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
