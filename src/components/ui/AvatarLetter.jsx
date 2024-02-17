import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function AvatarLetter() {
  const loginedUser = useSelector((state) => state.login.loginedUser);
  return (
    <Stack>
      <Avatar sx={{ bgcolor: "#9087E5" }}>MD</Avatar>
    </Stack>
  );
}
