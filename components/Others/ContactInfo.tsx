import React from "react";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";

const ContactInfo = () => {
  const items = [
    {
      title: "Email Us",
      description:
        "Email us for general queries, including marketing and partnership opportunities.",
      value: "our-email@email.com",
      Icon: MdEmail,
    },
    {
      title: "Call Us",
      description:
        "Call us to speak to a member of our team. We are always happy to help.",
      value: "+1 234 567 890",
      Icon: MdPhone,
    },
    {
      title: "Address",
      description: "Visit us at our office for a coffee and a chat.",
      value: "1234 Street Name, City Name, United States",
      Icon: MdLocationPin,
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-4 mb-4 text-white bg-blue-500 rounded-lg">
            <item.Icon size={32} />
          </div>
          <div className="text-center">
            <h4 className="mb-2 text-lg font-medium text-gray-800">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 max-w-[200px] mx-auto">{item.description}</p>
            <p className="mt-1 text-sm text-blue-600 hover:underline">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
