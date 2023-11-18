import React from "react";
import { SEO } from "../components";

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="Not found" />
    <h1>OOPS!</h1>
    <p>
      Looks like the page you&apos;re looking for doesn&apos;t exist... the
      sadness 😭
    </p>
  </>
);

export default NotFoundPage;
