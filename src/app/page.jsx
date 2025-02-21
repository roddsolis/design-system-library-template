import SideMenu from "@/components/SideMenu";
import MainContent from "@/components/MainContent";
import "@/app/Home-style.css";

export default function Home({ children }) {
  return (
    <div className="HomeContainer">
      <MainContent>{children}</MainContent>
    </div>
  );
}
