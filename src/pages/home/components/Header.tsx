import { Box, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid xs={12} container display={"flex"}>
        <Grid item xs={12} sx={{ alignItems: 'center' }} display={'flex'}>
          <Grid item xs={8} >
            <Box sx={{ borderColor: "#FFF" }}>
              <Tabs
                sx={{ color: "black" }}
                textColor="inherit"
                indicatorColor="primary"
                aria-label="basic tabs example"
                value={value}
                onChange={handleChange}
              >
                <Tab
                  sx={{
                    gap: 1,
                    color: "black",
                    fontWeight: "700",
                    size: "18px",
                  }}
                  label="Home"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ color: "#black" }}
                  label="Project"
                  {...a11yProps(1)}
                />
                <Tab sx={{ color: "#black" }} label="Sales" {...a11yProps(2)} />
              </Tabs>
              <Divider />
            </Box>
            <CustomTabPanel value={value} index={0}>
              HOME
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              PROJECTS
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              SALES
            </CustomTabPanel>
          </Grid>
          <Grid item xs={4} display={'flex'} sx={{ backgroundColor: 'gray', alignItems: 'center', gap: 2, mt: 0 }}>
            <Box>
            <Image
            src="/cozinheiro.svg"
            width={48}
            height={48}
            alt="Picture of the author"
          />
            </Box>
            <Box>
            <Image
            src="/nativo.svg"
            width={220}
            height={120}
            alt="Picture of the author"
          />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
