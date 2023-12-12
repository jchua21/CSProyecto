import { Link, useFetcher, useLoaderData } from "react-router-dom";
import axiosClient from "../../../config/libraries/axios";

import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
  TableWrapper,
  AdminContainer,
} from "./admin.style";
import { Button } from "../../../components/UI";

import { formatDate } from "../../../helpers/index";

import { FaPlusCircle } from "react-icons/fa";

export const loader = async () => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await axiosClient("/events/doctor", {
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

const AdminPage = () => {
  const events = useLoaderData();
  const fetcher = useFetcher();

  return (
    <AdminContainer>
      <Button as={Link} to="/admin/create">
        Añadir Nuevo Evento <FaPlusCircle />
      </Button>

      <TableWrapper>
        <Table summary="Mis Propios Eventos">
          {/* <caption>Mis Eventos Registrados</caption> */}
          <THead>
            <Tr>
              <Th scope="col">Nombre</Th>
              <Th scope="col">Fecha</Th>
              <Th scope="col"></Th>
              <Th scope="col">Acciones</Th>
            </Tr>
          </THead>

          <TBody>
            {events.map((event) => (
              <Tr key={event._id}>
                <Td>{event.nombre}</Td>
                <Td>{formatDate(event.datetime)}</Td>
                <Td>
                  <img
                    src={event.urlImage}
                    alt={`Image de evento ${event.nombre}`}
                  />
                </Td>
                <Td $action>
                  <Button
                    variant="warning"
                    as={Link}
                    to={`/admin/edit/${event._id}`}
                  >
                    Editar
                  </Button>

                  <fetcher.Form method="DELETE" action="/admin/destroy">
                    <input type="hidden" value={event._id} name="idEvent" />

                    <Button variant="danger" as="button" type="submit">
                      Eliminar
                    </Button>
                  </fetcher.Form>
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </TableWrapper>
    </AdminContainer>
  );
};

export default AdminPage;
