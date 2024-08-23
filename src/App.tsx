import { Box, Stack } from "@mui/material";
import Header from "./layouts/header";
import LandingPage from "./pages/landing";

function App() {
  return (
    <Stack>
      <Header />
      <LandingPage />
    </Stack>
  );
}

export default App;
