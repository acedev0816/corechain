import { Box, Container, Stack, Typography } from "@mui/material";

const LandingPage = () => (
  <Stack bgcolor="black">
    <Stack
      sx={{
        background: "black url('/assets/pg1/visual.png') no-repeat center;",
        backgroundSize: "130vw 170vh",
        backgroundPosition: "-30vw calc(-35vh + 50px)",
        height: "calc(100vh - 100px)",
        p: 15,
        boxSizing: "border-box",
      }}
      alignItems="flex-end"
      justifyContent="flex-end"
    >
      <img src="/assets/pg1/coreswap.png" height={80} width={500} />
      <Typography color="white" fontSize={20} mt={2}>
        Blending Artificial Intelligence with SocialFi and DeFi
      </Typography>
      <Typography color="white" fontSize={20} mt={1}>
        on CORE Chain.Trade.Pay.Earn on CORE Chain
      </Typography>
      <Typography color="white" fontSize={20} mt={1}>
        through CORESwap
      </Typography>
      <Stack mt={2} direction="row" spacing={1}>
        <img src="/assets/pg1/X.png" width={60} height={60} />
        <img src="/assets/pg1/telegram.png" width={60} height={60} />
      </Stack>
      <Stack mt={2} direction="row" spacing={2}>
        <Stack
          position="relative"
          width={170}
          height={60}
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "url('/assets/pg1/button.png') center/cover no-repeat",
          }}
        >
          <Typography color="white" fontSize={24} lineHeight={1} fontWeight={700}>
            Swap
          </Typography>
          <Typography color="gray" fontSize={14} mt={0} lineHeight={1}>
            (Coming soon)
          </Typography>
        </Stack>
        <Stack
          position="relative"
          width={170}
          height={60}
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "url('/assets/pg1/button.png') center/cover no-repeat",
          }}
        >
          <Typography color="white" fontSize={24} lineHeight={1} fontWeight={700}>
            CASI
          </Typography>
          <Typography color="gray" fontSize={14} mt={0} lineHeight={1}>
            (Coming soon)
          </Typography>
        </Stack>
        <Stack
          position="relative"
          width={170}
          height={60}
          alignItems="center"
          justifyContent="center"
          sx={{
            background:
              "url('/assets/pg1/button_act.png') center/cover no-repeat",
          }}
        >
          <Typography color="white" fontSize={24} fontWeight={700}>
            Play
          </Typography>
        </Stack>
      </Stack>
    </Stack>
    {/* page 2 */}
    <Box component="img" src="/assets/building_on.png" />
    {/* page 3 */}
    <Stack
      height="160vh"
      sx={{
        background:
          "black url('/assets/pg3/visual pg3.png') center/cover no-repeat",
      }}
      p={15}
      boxSizing="border-box"
      justifyContent="center"
    >
      <Typography color="#f99215" fontSize={36} fontFamily="CodecProBold!important">
        Blending AI
      </Typography>
      <Typography color="white" fontSize={20} maxWidth={600}>
        We are buliding an AI Ecosystem on CORE Chain where your dreams get
        turned into reality with a few taps
      </Typography>
      <Stack
        position="relative"
        width={170}
        height={60}
        alignItems="center"
        justifyContent="center"
        sx={{
          background: "url('/assets/pg1/button.png') center/cover no-repeat",
        }}
        mt={2}
      >
        <Typography color="gray" fontSize={14} mt={0} lineHeight={1}>
          (Coming soon)
        </Typography>
      </Stack>
      <Typography color="#f99215" fontSize={20} mt={4}>
        Swap. Trade. Earn
      </Typography>
      <Typography color="white" fontSize={20} maxWidth={600}>
        Swap Tokens under the CORE Network. A Uniswap-Forked DEX built on top of
        CORE Chain to ensure seamless trades.
      </Typography>

      <Typography color="#f99215" fontSize={20} mt={4}>
        Play.
      </Typography>
      <Typography color="white" fontSize={20} maxWidth={600}>
        Start Playing the first tap-to-earn Telegram Mini App built powered by
        the CORE Chain. Earn some juicy $CSWAP in exchange.
      </Typography>
    </Stack>
    {/* page 4 */}
    <Stack height={80} justifyContent="center" alignItems="center">
      <Typography color="#f99215" fontSize={36} fontFamily="CodecProBold!important">
        Tokenomics
      </Typography>
    </Stack>
    <Stack
      height="calc(100vh - 80px)"
      sx={{
        background:
          "black url('/assets/tokenomics.png') center/contain no-repeat",
      }}
    />

    {/* page 5: road map */}
    <Stack height={80} justifyContent="center" alignItems="center" mt={10}>
      <Typography color="#f99215" fontSize={36} fontFamily="CodecProBold!important">
        Roadmap
      </Typography>
    </Stack>
    <Stack
      height="calc(100vh - 80px)"
      sx={{
        background:
          "black url('/assets/pg5/roadmap.png') center/contain no-repeat",
      }}
    />
    {/* page6: out team */}
    <Box
      component="img"
      width="100%"
      height={200}
      src="/assets/pg6/team visual.png"
    />
    <Stack height={80} justifyContent="center" alignItems="center" mt={10}>
      <Typography color="#f99215" fontSize={36} fontFamily="CodecProBold!important">
        Our team
      </Typography>
    </Stack>
    <Stack
      height="calc(100vh - 80px)"
      sx={{
        background:
          "black url('/assets/pg6/lights.png') center/contain no-repeat",
      }}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Stack
        position="relative"
        width={300}
        height={390}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          background: "url('/assets/pg6/member frame.png') center/cover no-repeat",
        }}
        pb={5}
        boxSizing="border-box"
        spacing={1}
      >
        <Typography color="#f99215" fontSize={24} lineHeight={1}>
          Ril
        </Typography>
        <Typography color="white" fontSize={24} lineHeight={1}>
          Co-Founder
        </Typography>
      </Stack>
      <Stack
        position="relative"
        width={300}
        height={390}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          background: "url('/assets/pg6/member frame.png') center/cover no-repeat",
        }}
        pb={5}
        boxSizing="border-box"
        spacing={1}
        mt={10}
      >
        <Typography color="#f99215" fontSize={24} lineHeight={1}>
          Ka
        </Typography>
        <Typography color="white" fontSize={24} lineHeight={1}>
          Co-Founder
        </Typography>
      </Stack>
      <Stack
        position="relative"
        width={300}
        height={390}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          background: "url('/assets/pg6/member frame.png') center/cover no-repeat",
        }}
        pb={5}
        boxSizing="border-box"
        spacing={1}
      >
        <Typography color="#f99215" fontSize={24} lineHeight={1}>
          Linda
        </Typography>
        <Typography color="white" fontSize={24} lineHeight={1}>
          Marketing
        </Typography>
      </Stack>
      <Stack
        position="relative"
        width={300}
        height={390}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          background: "url('/assets/pg6/member frame.png') center/cover no-repeat",
        }}
        pb={5}
        boxSizing="border-box"
        spacing={1}
      >
        <Typography color="#f99215" fontSize={24} lineHeight={1}>
          Huang
        </Typography>
        <Typography color="white" fontSize={24} lineHeight={1}>
          Partnerships
        </Typography>
      </Stack>
    </Stack>
    
  </Stack>
);

export default LandingPage;
