"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/components/SideMenu-style.scss";
import { ChevronRight, ChevronDown } from "lucide-react";

const SideMenu = () => {
  const [seeItems, setSeeItems] = useState(false);

  useEffect(() => {
    setSeeItems(false);
  }, []);
  return (
    <div className="SideMenuContainer">
      <div className="Category" onClick={() => setSeeItems(!seeItems)}>
        foundations{" "}
        {!seeItems ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
      </div>
      <div
        className="SubCategoryItems"
        style={{ display: seeItems ? "block" : "none" }}
      >
        <Link href="/colores">colores</Link>
        <Link href="/tipografia">tipografia</Link>
      </div>
    </div>
  );
};

export default SideMenu;
