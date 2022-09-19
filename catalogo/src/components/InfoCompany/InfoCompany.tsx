import { Instagram, WhatsApp, Map } from "@mui/icons-material";
import { Button, Card, ImageListItem, Stack } from "@mui/material";
import React from "react";
import { styles } from "./InfoCompanyCss";

export interface InfoCompanyInterface {}

const InfoCompany: React.FC<InfoCompanyInterface> = () => {
  return (
    <Card sx={styles.container}>
      <ImageListItem>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/607/477/small/coffee-background-with-realistic-cup-of-coffee-vector.jpg" />
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          position="absolute"
          top={0}
          right={10}
          marginTop={1}
        >
          <Button sx={styles.button}>
            <WhatsApp sx={styles.icons} />
          </Button>
          <Button sx={styles.button}>
            <Instagram sx={styles.icons} />
          </Button>
          <Button sx={styles.button}>
            <Map sx={styles.icons} />
          </Button>
        </Stack>
      </ImageListItem>
    </Card>
  );
};

export default InfoCompany;
