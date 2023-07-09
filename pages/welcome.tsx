import React from "react";

import Container from "@/components/CustomUI/Container";
import Layout from "@/components/CustomUI/Layout";
import { useCustomSession } from "@/context/customSession";
import ChangePasswordForm from "@/components/Profile/ChangePasswordForm";

type Props = {};

const WelcomePage = (props: Props) => {
  const { customSession, setCustomSession } = useCustomSession();

  return (
    <Layout title="Welcome!">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold">
            Welcome {customSession?.user?.name}
          </h1>
          <p className="text-lg mt-3 text-gray-600">Set a New Password to Continue</p>

          <div className="max-w-2xl w-full text-left">
            <ChangePasswordForm isNew />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default WelcomePage;
