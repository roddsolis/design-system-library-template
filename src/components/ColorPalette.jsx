import "../styles/colorSample-styles.scss";

const ColorPalette = ({ systemColors }) => {
  return (
    <div className="content-items">
      {systemColors.map((color, i) => {
        return (
          <div className="colorSample-container" key={i}>
            <div
              className="color-container"
              style={{ backgroundColor: color.colorValue }}
            >
              <p>{color.contrastInfo}</p>
            </div>
            <div className="colorData-container">
              <p>{color.colorNumber}</p>
              <p>
                <strong>{color.colorName}</strong>
              </p>
              <p>{color.colorValue}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorPalette;
