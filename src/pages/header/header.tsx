import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface headerProps<T> {
  headerProps: T[];
}

export default function HeaderBar<
  T extends { titulo?: string; login?: string; cadastro?: string }
>(props: headerProps<T>) {
  const { headerProps } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {headerProps.map((value) => (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {value.titulo}
              </Typography>
              <Button color="inherit">{value.login}</Button>
              <Button color="inherit">{value.cadastro}</Button>
            </>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
