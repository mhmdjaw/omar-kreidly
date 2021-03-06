import React from "react";
import { Layout, SEO } from "../components";
import { PageProps } from "gatsby";

const About: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <>
      <SEO title="About" />
      <Layout pathname={location.pathname}>
        <></>
      </Layout>
    </>
  );
};

export default About;
