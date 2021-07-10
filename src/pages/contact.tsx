import React from "react";
import { Layout, SEO } from "../components";
import { PageProps } from "gatsby";

const Contact: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <>
      <SEO title="Contact" />
      <Layout pathname={location.pathname}>
        <></>
      </Layout>
    </>
  );
};

export default Contact;
