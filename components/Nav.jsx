import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuItem } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

const Nav = () => {
  const router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleMenuClick = pageURL => {
  //   history.push(pageURL);
  //   setAnchorEl(null);
  // };

  // const handleButtonClick = pageURL => {
  //   history.push(pageURL);
  // };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Schedule",
      pageURL: "/schedule",
    },
    {
      menuTitle: "History",
      pageURL: "/history",
    },
    {
      menuTitle: "Gallery",
      pageURL: "/gallery",
    },
    {
      menuTitle: "Pageant",
      pageURL: "/pageant",
    },
    {
      menuTitle: "Volunteer",
      pageURL: "/volunteer",
    },
    {
      menuTitle: "Sponsors",
      pageURL: "/sponsors",
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {/* <div>
            <img src="/mound.jpg" />
          </div> */}
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem
                      onClick={() => {
                        setAnchorEl(null);
                        router.push(pageURL);
                      }}
                    >
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              {menuItems.map((menuItem) => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <Button
                    variant="contained"
                    onClick={() => router.push(pageURL)}
                  >
                    {menuTitle}
                  </Button>
                );
              })}

              {/* <Button variant="contained">Schedule</Button>
              <Button variant="contained"></Button>
              <Button variant="contained">HOME</Button>
              <Button variant="contained">CONTACT</Button>
              <Button variant="contained">ABOUT</Button>
              <Button variant="contained">ABOUT</Button> */}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
