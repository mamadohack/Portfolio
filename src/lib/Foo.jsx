import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./Footer";

const Foo = ({}) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={
        // … and provide the relevant messages
        messages
      }
    >
      <Footer />
    </NextIntlClientProvider>
  );
};

export default Foo;
