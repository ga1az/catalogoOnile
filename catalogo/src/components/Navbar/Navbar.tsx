import { Instagram, Map, WhatsApp } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItemAvatar,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { styles } from "./NavbarCss";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <Box>
      <AppBar position="static" sx={styles.navBar}>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={styles.mainStack}
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar alt="Logo" variant="circular">
              LO
            </Avatar>
            <List sx={styles.information}>
              <h3>☕ Cafe Unico</h3>
              <span>📍 Concepcion, Lomas San Sebastian</span>
            </List>
          </Stack>
          {/* <Stack direction="row" alignItems="center" spacing={1}>
            <WhatsApp />
            <Instagram />
            <Map />
          </Stack> */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent="center"
          >
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="subtitle1">
                  Envio Gratis sin minimo de pedido
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Navbar;
