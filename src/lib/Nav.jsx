import { NextIntlClientProvider, useMessages } from "next-intl";
import NavBar from "./NavBar";

const Nav = ({}) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={
        // … and provide the relevant messages
        messages
      }
    >
      <NavBar />
    </NextIntlClientProvider>
  );
};

export default Nav;
