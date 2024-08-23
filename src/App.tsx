import { Box, Stack } from "@mui/material";
import Header from "./layouts/header";
import LandingPage from "./pages/landing";
import "./App.css";
function App() {
  return (
    <Stack
      sx={{
        "& .MuiTypography-root": {
          fontFamily: "CodecProLight",
        },
      }}
    >
      <Header />
      <LandingPage />
    </Stack>
  );
}

export default App;
