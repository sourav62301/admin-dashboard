import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return <Box>HI hello how are you </Box>;
};

export default ProgressCircle;
