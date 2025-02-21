"use client";

import React from "react";
import Link from "next/link";
import "@/components/SideMenu-style.css";
import { useEffect, useState } from "react";

const SideMenu = () => {
  const [seeItems, setSeeItems] = useState(false);

  return (
    <div className="SideMenuContainer">
      <div className="Category">foundations</div>
      <div className="SubCategoryItems">
        <Link href="/colores">colores</Link>
        <Link href="/tipografia">tipografia</Link>
      </div>
    </div>
  );
};

export default SideMenu;
