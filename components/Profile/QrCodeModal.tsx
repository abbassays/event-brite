import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import QRCode from "react-qr-code";

import { QRCodeTicketType } from "../../types";

export default function QrCodeModal({
  selectedTicket,
  isOpen,
  setIsOpen,
}: {
  selectedTicket: QRCodeTicketType;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  console.log("selectedTicket is ", selectedTicket);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 " />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900 "
                >
                  Ticket QR Code
                </Dialog.Title>
                <div className="mt-2 w-full flex flex-col justify-between">
                  <div className="my-4 ">
                    <p>
                      <span className="font-bold">Event Name: </span>
                      {selectedTicket?.name}
                    </p>
                    <p>
                      <span className="font-bold">Event Location: </span>
                      {selectedTicket?.location}
                    </p>
                    <p>
                      <span className="font-bold">Ticket Type: </span>
                      {selectedTicket?.type}
                    </p>
                    <p>
                      <span className="font-bold">Ticket Quantity: </span>
                      {selectedTicket?.boughtQuantity}
                    </p>
                  </div>
                  <div className="flex justify-center my-6">
                    <QRCode
                      value={selectedTicket?.id}
                      size={256}
                      fgColor="rgb(23,37,84)"
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
