import React from "react";
import { Header, SEO } from "../components";
import { PageProps } from "gatsby";

const About: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <>
      <SEO title="About" />
      <Header pathname={location.pathname} />
    </>
  );
};

export default About;
