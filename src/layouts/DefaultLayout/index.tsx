import BreadCrumb from "../../components/BreadCrumb";
import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";
import "./defaultLayout.scss";
interface PropsType {
  children: JSX.Element;
}
const DefaultLayout = ({ children }: PropsType) => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="container">
        <NavBar />
        <BreadCrumb />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
