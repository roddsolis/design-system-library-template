"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { allPages } from "contentlayer/generated"; // Importa todas las páginas generadas por Contentlayer

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
        {/* Mapea las rutas de las páginas generadas por Contentlayer */}
        {allPages
          .filter((page) => page._raw.flattenedPath.startsWith("foundations"))
          .map((page) => {
            const subcategory = page._raw.flattenedPath.split("/")[1]; // Obtiene la subcategoría del slug
            return (
              <Link
                key={page._raw.flattenedPath}
                href={`/${page._raw.flattenedPath}`}
              >
                {subcategory}{" "}
                {/* Aquí mostramos el nombre de la subcategoría */}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SideMenu;
