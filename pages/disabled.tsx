import Container from "@/components/CustomUI/Container";
import Layout from "@/components/CustomUI/Layout";
import ContactUsForm from "@/components/Others/ContactUsForm";
import ComponentContainer from "@/components/Profile/ComponentContainer";
import React from "react";

type Props = {};

const DisabledPage = (props: Props) => {
  return (
    <Layout title="Account Disabled">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <h1 className="text-3xl font-bold">Account Disabled</h1>
          <p className="text-lg mt-3 text-gray-600">
            Your account has been disabled. Please contact the admin for more
            information.
          </p>

          <div className="w-full max-w-2xl text-left">
            <ComponentContainer>
              <ContactUsForm isDisabled />
            </ComponentContainer>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default DisabledPage;
