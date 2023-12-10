import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SelectComponent() {
  return (
    <Autocomplete
      className="HoverAndFocus"
      disablePortal
      id="combo-box-demo"
      options={categories}
      sx={{
        display: "flex",
        marginLeft: "1rem",
        paddingLeft: "8px",
        paddingRight: "8px",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        borderRadius: "1.25rem",
        width: 200,
        height: 56,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Category"
          sx={{
            "& fieldset": {
              border: "none",
            },
            "& label": {
              color: "#6A5AE0",
            },
          }}
        />
      )}
    />
  );
}

const categories = [
  { label: "Math" },
  { label: "Biology" },
  { label: "Music" },
];
