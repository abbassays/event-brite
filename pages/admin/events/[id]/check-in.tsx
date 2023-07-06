import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QrReader } from "react-qr-reader";
import { MdPhotoCamera } from "react-icons/md";

import allEvents from "../../../../utils/all_events.json";
import { EventType } from "../../../../types";

import Layout from "../../../../components/CustomUI/Layout";
import Container from "../../../../components/CustomUI/Container";

const CheckIn = () => {
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

  return (
    <Layout title="Check In">
      <Container title="Scan Qr Code">
        <div className="max-w-md sm:max-w-xl aspect-square mx-auto p-2 border border-black rounded-lg">
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
              <MdPhotoCamera
                size={100}
                onClick={() => setStartScan(true)}
                className="cursor-pointer"
              />
              <p className="">Press the Camera Icon to Check In</p>
            </div>
          )}
        </div>
        {data && (
          <div className="text-center mt-10 w-full">Scanned text is {data}</div>
        )}
      </Container>
    </Layout>
  );
};

export default CheckIn;
