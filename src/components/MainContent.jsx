import Footer from "./Footer";

const MainContent = ({ children }) => {
  return (
    <div className="MainContent">
      <div className="Content">{children}</div>
      <Footer />
    </div>
  );
};

export default MainContent;
