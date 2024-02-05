import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A5AE0",
    },
    secondary: {
      main: "#9087E5",
    },
  },
});

export default function ProfileButtons({ value, setValue }) {
  const languageArray = useSelector((state) => state.language.languageArray);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
          aria-label="primary tabs example"
        >
          <Tab
            value="Badge"
            label={languageArray[0].Badge}
            sx={{ textTransform: "none" }}
          />
          <Tab
            value="Stats"
            label={languageArray[0].Stats}
            sx={{ textTransform: "none" }}
          />
          <Tab
            value="Details"
            label={languageArray[0].Details}
            sx={{ textTransform: "none" }}
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
