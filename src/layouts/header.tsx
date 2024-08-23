import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        height: 100,
        bgcolor: "#141414",
        boxShadow: "0px 40px 70px black",
      }}
    >
      <Toolbar>
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Stack
            // bgcolor="red"
            direction="row"
            alignItems="center"
            height="100%"
          >
            <img src="/assets/pg1/logo_long.png" height="90%" />
            <Stack
              direction="row"
              flexGrow={1}
              justifyContent="flex-end"
              spacing={2}
            >
              <Typography variant="h6">Swap</Typography>
              <Typography variant="h6">Play</Typography>
              <Typography variant="h6">Features</Typography>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
