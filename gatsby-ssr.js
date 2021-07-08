import React from "react";
import { Providers, Layout } from "./src/components";

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
