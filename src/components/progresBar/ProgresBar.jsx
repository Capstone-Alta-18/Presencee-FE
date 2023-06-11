import React from "react";

const ProgresBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: 22,
    width: "535px",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 10,
    textAlign: "center",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    margin: "-19px 0 0 0",
    color: "transparent",
  };

  const progresstext = {
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <span style={progresstext}>{`${progress}%`}</span>
      <div style={Childdiv}>TEST</div>
    </div>
  );
};

export default ProgresBar;
