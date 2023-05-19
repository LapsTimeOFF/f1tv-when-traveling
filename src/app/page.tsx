"use client";
import {
  Container,
  CssBaseline,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

enum CountryType {
  PRO_EU = "eu-pro",
  ACCESS_EU = "eu-access",
  PRO_NON_EU = "non-eu-pro",
  ACCESS_NON_EU = "non-eu-access",
  NO_F1TV = "no-f1tv",
}

enum ProResultType {
  A = "You'll have access to the same content as your home country",
  B = "You'll have access to the content that is available in the country you are visiting",
  C = "You'll have access to F1TV Access content on only. The content you can access will match the country you are visiting",
  NO = "You'll not have access to F1TV",
}

enum AccessResultType {
  A = "You'll have access to F1TV Access content on only and this will be the same as your home country",
  B = "You'll have access to F1TV Access content on only and you will only be able to access same features as the country you are visiting",
  NO = "You'll not have access to F1TV",
}

export default function Home() {
  const [origin, setOrigin] = useState<CountryType | null>(null);
  const [dest, setDest] = useState<CountryType | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h1">F1TV when traveling</Typography>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Origin Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Origin Country"
            value={origin}
            onChange={(e) => setOrigin(e.target.value as CountryType)}
          >
            <MenuItem value={CountryType.PRO_EU}>EU country with F1TV Pro</MenuItem>
            <MenuItem value={CountryType.ACCESS_EU}>EU country with F1TV Access</MenuItem>
            <MenuItem value={CountryType.PRO_NON_EU}>Non-EU country with F1TV Pro</MenuItem>
            <MenuItem value={CountryType.ACCESS_NON_EU}>
              Non-EU country with F1TV Access
            </MenuItem>
            <MenuItem value={CountryType.NO_F1TV}>Non-F1TV country</MenuItem>
          </Select>
          <FormHelperText>Where are you from?</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Destination Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Destination Country"
            value={dest}
            onChange={(e) => setDest(e.target.value as CountryType)}
          >
            <MenuItem value={CountryType.PRO_EU}>EU country with F1TV Pro</MenuItem>
            <MenuItem value={CountryType.ACCESS_EU}>EU country with F1TV Access</MenuItem>
            <MenuItem value={CountryType.PRO_NON_EU}>Non-EU country with F1TV Pro</MenuItem>
            <MenuItem value={CountryType.ACCESS_NON_EU}>
              Non-EU country with F1TV Access
            </MenuItem>
            <MenuItem value={CountryType.NO_F1TV}>Non-F1TV country</MenuItem>
          </Select>
          <FormHelperText>Where are you going?</FormHelperText>
        </FormControl>
        {origin && dest ? (
          <Typography variant="body1">{
            (() => {
              if(origin === CountryType.PRO_EU && dest === CountryType.PRO_EU) {
                return ProResultType.A;
              }
              if(origin === CountryType.PRO_EU && dest === CountryType.PRO_NON_EU) {
                return ProResultType.B;
              }

              if(origin === CountryType.PRO_EU && dest === CountryType.ACCESS_EU) {
                return ProResultType.A;
              }
              if(origin === CountryType.PRO_EU && dest === CountryType.ACCESS_NON_EU) {
                return ProResultType.C;
              }

              if(origin === CountryType.PRO_EU && dest === CountryType.NO_F1TV) {
                return ProResultType.NO;
              }

              // ------- \\

              if(origin === CountryType.PRO_NON_EU && dest === CountryType.PRO_EU) {
                return ProResultType.B;
              }
              if(origin === CountryType.PRO_NON_EU && dest === CountryType.PRO_NON_EU) {
                return ProResultType.B;
              }

              if(origin === CountryType.PRO_NON_EU && dest === CountryType.ACCESS_EU) {
                return ProResultType.C;
              }
              if(origin === CountryType.PRO_NON_EU && dest === CountryType.ACCESS_NON_EU) {
                return ProResultType.C;
              }

              if(origin === CountryType.PRO_NON_EU && dest === CountryType.NO_F1TV) {
                return ProResultType.NO;
              }

              // ------- \\

              if(origin === CountryType.ACCESS_EU && dest === CountryType.PRO_EU) {
                return AccessResultType.A;
              }
              if(origin === CountryType.ACCESS_EU && dest === CountryType.PRO_NON_EU) {
                return AccessResultType.B;
              }

              if(origin === CountryType.ACCESS_EU && dest === CountryType.ACCESS_EU) {
                return AccessResultType.A;
              }
              if(origin === CountryType.ACCESS_EU && dest === CountryType.ACCESS_NON_EU) {
                return AccessResultType.B;
              }

              if(origin === CountryType.ACCESS_EU && dest === CountryType.NO_F1TV) {
                return AccessResultType.NO;
              }

              // ------- \\

              if(origin === CountryType.ACCESS_NON_EU && dest === CountryType.PRO_EU) {
                return AccessResultType.B;
              }
              if(origin === CountryType.ACCESS_NON_EU && dest === CountryType.PRO_NON_EU) {
                return AccessResultType.B;
              }

              if(origin === CountryType.ACCESS_NON_EU && dest === CountryType.ACCESS_EU) {
                return AccessResultType.B;
              }
              if(origin === CountryType.ACCESS_NON_EU && dest === CountryType.ACCESS_NON_EU) {
                return AccessResultType.B;
              }

              if(origin === CountryType.ACCESS_NON_EU && dest === CountryType.NO_F1TV) {
                return AccessResultType.NO;
              }
            })()
          }</Typography>
        ) : (
          <Typography variant="body1">Please fill every field</Typography>
        )}
      </Container>
    </ThemeProvider>
  );
}
