import { useState, useEffect } from "react";
// hammer icon
import hammerBlack from "../assets/icons/hammer-black.svg";
import hammerWhite from "../assets/icons/hammer-white.svg";
// code icon
import codeBlack from "../assets/icons/code-black.svg";
import codeWhite from "../assets/icons/code-white.svg";
// palette icon
import paletteBlack from "../assets/icons/palette-black.svg";
import paletteWhite from "../assets/icons/palette-white.svg";
// sprout icon
import sproutBlack from "../assets/icons/seedling-black.svg";
import sproutWhite from "../assets/icons/seedling-white.svg";

function SubBanner() {
  const prefersLightMode = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const hammerIcon = prefersLightMode ? hammerWhite : hammerBlack;
  const codeIcon = prefersLightMode ? codeWhite : codeBlack;
  const paletteIcon = prefersLightMode ? paletteWhite : paletteBlack;
  const sproutIcon = prefersLightMode ? sproutWhite : sproutBlack;

  const createWord = (icon: string, alt: string, label: string) => (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <img
        src={icon}
        alt={alt}
        style={{ width: "30px", verticalAlign: "middle", marginRight: "7px" }}
      />
      <span>{label}</span>
    </span>
  );

  const words = [
    createWord(hammerIcon, "hammer", "Maker"),
    createWord(codeIcon, "code", "Coder"),
    createWord(paletteIcon, "palette", "Content Creator"),
    createWord(sproutIcon, "sprout", "Entrepreneur"),
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return <div className="sub-banner">{words[index]}</div>;
}

export default SubBanner;
