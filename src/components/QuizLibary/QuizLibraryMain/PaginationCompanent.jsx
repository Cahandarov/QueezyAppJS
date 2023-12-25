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

const PaginationComponent = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
};

export default PaginationComponent;
