import React from "react";
import { Providers, WrapPage } from "./src/components";

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};

export const wrapPageElement = ({ element }) => {
  return <WrapPage>{element}</WrapPage>;
};
