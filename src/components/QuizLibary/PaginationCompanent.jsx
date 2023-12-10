import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A5AE0",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",

      contrastText: "#47008F",
    },
  },
});

export default function PaginationCompanent() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          count={2}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
}
