import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src="/logo.jpg" width={205} height={74} />
    </header>
  );
};

export default Header;
