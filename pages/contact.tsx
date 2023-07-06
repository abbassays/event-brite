import React from "react";

import Layout from "../components/CustomUI/Layout";
import Container from "../components/CustomUI/Container";
import ContactUsForm from "../components/Others/ContactUsForm";
import ContactInfo from "../components/Others/ContactInfo";
type Props = {};

const ContactUsPage = (props: Props) => {
  return (
    <Layout title="Contact Us">
      <Container title="Contact Us">
        <div className=" flex justify-between flex-col lg:flex-row lg:space-y-0 space-y-10 lg:space-x-10">
          <div className="w-full">
            <ContactUsForm />
          </div>
          <div className="w-full">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactUsPage;
