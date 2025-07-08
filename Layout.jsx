import Navbar from './Navbar';  // Ensure this is also imported
import Footer from './footer';   // Import the Footer component

const Layout = ({ children }) => {
  return (
    <div>  {/* Corrected opening div tag */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
