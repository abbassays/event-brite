import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import allTickets from "../../utils/all_tickets.json";
import allEvents from "../../utils/all_events.json";
import { CartType, EventType, TicketType } from "../../types";
import { getDateTimeString } from "../../utils/DateFunctions";

import TicketCard from "./TicketCard";
import Button from "../UI/Button";

type ModalProps = {
  eventId: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TicketModal = ({ eventId, isOpen, setIsOpen }: ModalProps) => {
  const [tickets, setTickets] = useState<TicketType[]>();
  const [event, setEvent] = useState<EventType>();
  //   Cart will also be fetched from user details
  const [cart, setCart] = useState<CartType>({
    id: "1",
    items: [],
  });

  const fetchTickets = () => {
    /* fetch ticket types of an event here  */
    const data = allTickets.filter((ticket) => ticket.eventId == eventId);
    setTickets(data);
  };

  const fetchEvent = () => {
    /* fetch event here  */
    const data = allEvents.filter((event) => event.id == eventId);
    setEvent(data[0]);
  };

  useEffect(() => {
    if (eventId && allTickets) fetchTickets();
    if (eventId && allEvents) fetchEvent();
  }, [eventId, allTickets]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddToCart = () => {
    console.log(
      "cart",
      cart.items.map((item) => item.quantity + " ")
    );
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  {event?.name} | {event?.location}
                </Dialog.Title>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {getDateTimeString(event?.startDate)} -{" "}
                  {getDateTimeString(event?.endDate)}
                </p>
                <hr className="mt-2" />
                <div className="py-6 space-y-4">
                  {
                    /* map tickets here */
                    tickets?.map((ticket) => (
                      <TicketCard
                        cart={cart}
                        setCart={setCart}
                        name={event.name}
                        {...ticket}
                      ></TicketCard>
                    ))
                  }
                </div>
                <div className="flex justify-end">
                  <div>
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TicketModal;
