import React from "react";
import Logo from "./../assets/img/Logo.svg";
import Categorias from "./../assets/img/Categorias.svg";
import DashBoard from "./../assets/img/DashBoard.svg";
import Clases from "./../assets/img/Clases.svg";
import Logout from "./../assets/img/Logout.svg";
import "./LateralMenuCss.css";

function LateralMenu() {
  return (
    <div>
      <div className="lateralMenu">
        <div className="contentLogo">
          <img src={Logo} alt="" />
        </div>
        <div className="contentRoutes">
          <a href="" className="btnCategories btn">
            <img src={Categorias} alt="" />
            <p>Categorias</p>
          </a>
          <a href="" className="btnCategories btn">
            <img src={DashBoard} alt="" />
            <p>Dashboard</p>
          </a>
          <a href="" className="btnCategories btn">
            <img src={Clases} alt="" />
            <p>Clases</p>
          </a>
        </div>
        <div className="contentLogout">
          <a href="" className="btnLogout btn">
            <img src={Logout} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LateralMenu;
