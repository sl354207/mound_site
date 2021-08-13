import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
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
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Tabs, Tab } from "@material-ui/core";

const drawerWidth = 240;

const AntTabs = withStyles((theme) => ({
  root: {},
  indicator: {
    backgroundColor: theme.palette.secondary.dark,
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(3),
    fontSize: 16,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: theme.palette.secondary.dark,
      opacity: 1,
    },
    "&$selected": {
      color: theme.palette.secondary.dark,
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: theme.palette.secondary.dark,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Nav = () => {
  const router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(false);
  };

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
      menuTitle: "Vendors",
      pageURL: "/vendors",
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
    <>
      <AppBar position="fixed">
        <Toolbar>
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
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              {/* <Menu
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
              </Menu> */}
              <Typography variant="h6" className={classes.title}>
                Mound
              </Typography>
              <Drawer
                className={classes.drawer}
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <Typography variant="h6" className={classes.title}>
                    Mound
                  </Typography>
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {menuItems.map((menuItem, index) => (
                    <ListItem
                      button
                      key={menuItem.menuTitle}
                      onClick={() => {
                        handleDrawerClose(Event);
                        setValue(index);
                        router.push(menuItem.pageURL);
                      }}
                    >
                      <ListItemText primary={menuItem.menuTitle} />
                    </ListItem>
                  ))}
                </List>
                {/* <Divider />
                <List>
                  {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List> */}
              </Drawer>
            </>
          ) : (
            <>
              <Typography variant="h6" className={classes.title}>
                Mound
              </Typography>
              <div className={classes.headerOptions}>
                <AntTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="ant example"
                >
                  {menuItems.map((menuItem) => {
                    const { menuTitle, pageURL } = menuItem;
                    return (
                      // <Button
                      //   variant="contained"
                      //   onClick={() => router.push(pageURL)}
                      // >
                      //   {menuTitle}
                      // </Button>
                      <AntTab
                        label={menuTitle}
                        onClick={() => router.push(pageURL)}
                      />
                    );
                  })}
                </AntTabs>
                <Typography className={classes.padding} />
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </>
  );
};

export default Nav;
