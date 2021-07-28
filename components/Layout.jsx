import Meta from "./Meta";
import Nav from "./Nav";
// import Header from './Header'
// import styles from '../styles/Layout.module.css'

// pass in children as a prop so any components in Layout tag in _app.js get rendered inside Layout
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>
          {/* <Header /> */}
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
