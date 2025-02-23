"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

const SideMenu = () => {
  const [seeItems, setSeeItems] = useState(false);

  useEffect(() => {
    setSeeItems(false);
  }, []);
  return (
    <div className="SideMenuContainer">
      <div className="Category" onClick={() => setSeeItems(!seeItems)}>
        <Link href={"/foundations"}>foundations</Link>
        <ChevronRight
          size={16}
          className={`chevron ${seeItems ? "rotate" : ""}`}
        />
      </div>
      <div
        className="SubCategoryItems"
        style={{ display: seeItems ? "block" : "none" }}
      >
        <Link href="/foundations/colores">colores</Link>
        <Link href="/foundations/tipografia">tipografia</Link>
      </div>
    </div>
  );
};

export default SideMenu;
