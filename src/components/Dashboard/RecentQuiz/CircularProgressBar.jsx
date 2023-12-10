import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

export default function CircularProgressBar() {
  return (
    <div>
      <CircularProgress value={40} color="#FF8FA2">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
    </div>
  );
}
