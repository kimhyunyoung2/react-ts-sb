import * as React from 'react';

type iconNameType = "logo-apple" | "persone";

interface iconType {
  name : iconNameType;
  //style : React.CSSProperties; 필수 / style? : React.CSSProperties; 선택
}

function Icon({name} : iconType) {
  return null;
  return (
      //  <img src={require("src/images/icon/" + name+".png")} >버튼</img>
      <div></div>
  );
}

Icon.defaultProps = {
  name : "logo-apple"
};

export default Icon;
