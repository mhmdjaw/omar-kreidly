import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from "./layout-styles";
import LoadingScreen from "../LoadingScreen";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <main>
        <LoadingScreen />
        {children}
      </main>
    </>
  );
};

export default Layout;
