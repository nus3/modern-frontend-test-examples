import { type FC } from "react";

export type OverlappingButtonsProps = {
  onBackButtonClick: () => void;
  onFrontButtonClick: () => void;
};

export const OverlappingButtons: FC<OverlappingButtonsProps> = ({
  onBackButtonClick,
  onFrontButtonClick,
}) => {
  return (
    <div style={{ position: "relative", width: "200px", height: "100px" }}>
      <button
        onClick={onBackButtonClick}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "150px",
          height: "60px",
          backgroundColor: "#ff6b6b",
          border: "none",
          borderRadius: "4px",
          color: "white",
          fontSize: "14px",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        背面ボタン
      </button>

      <button
        onClick={onFrontButtonClick}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "150px",
          height: "60px",
          backgroundColor: "#4ecdc4",
          border: "none",
          borderRadius: "4px",
          color: "white",
          fontSize: "14px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        前面ボタン
      </button>
    </div>
  );
};
