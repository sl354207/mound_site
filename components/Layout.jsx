import Meta from "./Meta";
import Nav from "./Nav";
import Footer from "./Footer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Header from './Header'
// import styles from '../styles/Layout.module.css'

const useStyles = makeStyles((theme) => ({
  layout: {
    flexGrow: 1,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    height: "100%",
    // minHeight: "100%",
    // backgroundColor: theme.palette.secondary.main,
  },
}));

// pass in children as a prop so any components in Layout tag in _app.js get rendered inside Layout
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Meta />
      <Nav />
      <div className={classes.layout}>
        <main>
          {/* <Header /> */}
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
