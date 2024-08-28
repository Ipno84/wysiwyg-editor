import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import Box from "@mui/material/Box/Box";

import { CommandsBar } from "@/editor/components/commands-bar";
import { Global } from "@/editor/components/global";
import { NavBar } from "@/editor/components/nav-bar";
import { RouterProvider } from "@/editor/navigation/provider";

const App: React.FC = () => {
  return (
    <>
      <Global />
      <Box sx={{ display: "flex", overflow: "hidden" }}>
        <CssBaseline />
        <CommandsBar />
        <Box component="main" sx={{ flex: 1 }}>
          <NavBar />
          <Box sx={{ flexGrow: 1 }}>
            <RouterProvider />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { App };
