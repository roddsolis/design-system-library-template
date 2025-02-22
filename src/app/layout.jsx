import SideMenu from "@/components/SideMenu";
import MainContent from "@/components/MainContent";
import "@/app/styles/global.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="HomeContainer">
          <SideMenu />
          <MainContent>{children}</MainContent>
        </div>
      </body>
    </html>
  );
}
