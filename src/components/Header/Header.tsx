import React from "react";
import { PrimaryLogo } from "../../assets/svg";
import { Container, Flex } from "../../styles/global-styles";
import { HeaderNav, Logo, NavItem } from "./header-styles";
import useHeader from "./Header.State";
import { useMediaQuery } from "react-responsive";
import theme from "../../theme";
import { ease } from "../../helpers";

interface HeaderProps {
  onAnimationComplete?: () => void;
  delayAnimation?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onAnimationComplete,
  delayAnimation,
}: HeaderProps) => {
  const { headerControls } = useHeader(delayAnimation, onAnimationComplete);
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.sm });

  return (
    <HeaderNav
      initial={{ y: isMobile ? -40 : -72, opacity: 0 }}
      animate={headerControls}
      transition={{ duration: 1, ease: ease.slideIn }}
    >
      <Container fluid>
        <Flex spaceBetween noHeight>
          <Logo to="#">
            <PrimaryLogo />
          </Logo>
          <Flex>
            <NavItem to="#">About</NavItem>
            <NavItem to="#">Contact</NavItem>
          </Flex>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
