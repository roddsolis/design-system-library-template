import SideMenu from "@/components/SideMenu";
import MainContent from "@/components/MainContent";
import "@/styles/global.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="HomeContainer">
          <Header />
          <SideMenu />
          <MainContent>{children}</MainContent>
          <Footer />
        </div>
      </body>
    </html>
  );
}
