import SideMenu from "@/components/SideMenu";
import "@/app/styles/global.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="HomeContainer">
          <SideMenu />
          <div className="MainContent">{children}</div>
        </div>
      </body>
    </html>
  );
}
