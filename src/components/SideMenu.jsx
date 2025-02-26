"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allPages } from "contentlayer/generated"; // Importa todas las páginas generadas por Contentlayer

const SideMenu = () => {
  const [openCategories, setOpenCategories] = useState({});

  // Organizar las páginas en categorías y subcategorías
  const categories = {};

  allPages.forEach((page) => {
    let [category, subcategory] = page._raw.flattenedPath.split("/");

    // Eliminar números al inicio de la categoría (ej. "01-foundations" → "foundations")
    category = category.replace(/^\d+-/, "");

    // Capitalizar la primera letra
    const formattedCategory =
      category.charAt(0).toUpperCase() + category.slice(1);

    if (!categories[formattedCategory]) {
      categories[formattedCategory] = [];
    }

    categories[formattedCategory].push({
      title: page.title,
      path: `/${page._raw.flattenedPath}`,
    });
  });

  return (
    <div className="SideMenuContainer">
      {Object.entries(categories).map(([category, subcategories]) => (
        <div key={category}>
          <div
            className="Category"
            onClick={() =>
              setOpenCategories((prev) => ({
                ...prev,
                [category]: !prev[category],
              }))
            }
          >
            <Link href={`/${category.toLowerCase()}`}>{category}</Link>
            <ChevronRight
              size={16}
              className={`chevron ${openCategories[category] ? "rotate" : ""}`}
            />
          </div>

          <div
            className="SubCategoryItems"
            style={{ display: openCategories[category] ? "block" : "none" }}
          >
            {subcategories.map((sub) => (
              <Link key={sub.path} href={sub.path}>
                {sub.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
