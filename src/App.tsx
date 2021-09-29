import { Button } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";

function App(): ReactJSXElement {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
