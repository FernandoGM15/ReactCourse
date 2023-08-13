import Navigation from "./navigation";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container content">
        <Navigation />
        <p className="copyright">
          All reserved rights {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
