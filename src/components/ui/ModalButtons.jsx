import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function ModalButtons({ value, setValue }) {
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
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="Top" label="Top" sx={{ textTransform: "none" }} />
          <Tab value="Quiz" label="Quiz" sx={{ textTransform: "none" }} />
          <Tab
            value="Categories"
            label="Categories"
            sx={{ textTransform: "none" }}
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
