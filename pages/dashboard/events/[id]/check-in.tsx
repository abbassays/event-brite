import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QrReader } from "react-qr-reader";
import { MdQrCodeScanner } from "react-icons/md";

import allEvents from "../../../../utils/all_events.json";
import { EventType } from "../../../../types";

import Layout from "../../../../components/CustomUI/Layout";
import Container from "../../../../components/CustomUI/Container";
import PageLoader from "@/components/CustomUI/PageLoader";
import { getDateTimeString } from "@/utils/DateFunctions";

const CheckInPage = () => {
  const router = useRouter();
  const [event, setEvent] = useState<EventType>();
  const [startScan, setStartScan] = useState<boolean>(false);

  const fetchEvent = () => {
    const eventId = router.query.id;
    const event = allEvents.find((event) => event.id === eventId);
    setEvent(event);
  };

  useEffect(() => {
    fetchEvent();
  }, [router.query.id, allEvents]);
  const [data, setData] = useState<string>();

  if (!event) {
    return <PageLoader />;
  }

  return (
    <Layout title="Check In">
      <Container title={`${event?.name} Check-In`}>
        <div className="flex flex-col gap-6 lg:gap-10 w-full items-center">
          <div className="flex flex-col gap-2 rounded-lg p-4 lg:p-6 bg-slate-100 w-full lg:max-w-none">
            <h1 className="text-xl font-semibold">Event Details</h1>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4">
              <LabelAndValue value={event?.name} label={"Name"} />
              <LabelAndValue value={event?.category} label={"Category"} />
              <LabelAndValue value={event?.location} label={"Location"} />
              <LabelAndValue
                value={getDateTimeString(event?.startDate)}
                label={"Start Date"}
              />
              <LabelAndValue
                value={getDateTimeString(event?.endDate)}
                label={"End Date"}
              />
              <LabelAndValue
                value={event?.ticketsSold}
                label={"Tickets Sold"}
              />
              <LabelAndValue
                value={event?.checkedInCount}
                label={"Checked-In"}
              />
            </div>
          </div>

          <div className="max-w-md sm:max-w-xl aspect-square p-2 border border-black rounded-lg w-full">
            {startScan ? (
              <QrReader
                onResult={(result, error) => {
                  if (!!result) {
                    setData(result.getText());
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
                constraints={{
                  facingMode: "environment",
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col justify-center items-center text-gray-500 border border-black rounded-lg">
                <MdQrCodeScanner
                  size={100}
                  onClick={() => setStartScan(true)}
                  className="cursor-pointer"
                />
                <p className="">Press to Scan Event Qr Code</p>
              </div>
            )}
          </div>
          {data && (
            <div className="text-center mt-10 w-full">
              Scanned text is {data}
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default CheckInPage;

type Props = {
  label: string;
  value: string | number;
  className?: string;
};

const LabelAndValue = ({ label, value, className }: Props) => {
  return (
    <div className={className}>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-base font-semibold">{value}</p>
    </div>
  );
};
