import * as React from 'react';
import './Box.css';

type sizeType = "big" | "medium" | "small";

interface IBox {
  size : sizeType;
}

function Box({size} : IBox) {
  if(size == "big"){
    return <div className={size === "big" ? "box big" : "box small"}>{size === "big" ? "큰" : "작은"} 박스</div>;
  }
  else if(size == "small"){
    return <div className={"box small"}>{"작은"} 박스</div>;
  }
  else{
    return (
      <div className={"box medium"}>중간 박스</div>
    );
  }
  // return (
  //           <div className={size === "big" ? cn(style.box, style.big) : cn(style.box, style.small)}>{size === "big" ? "큰" : "작은"} 박스</div>
  // );
}

Box.defaultProps = {
  size : "big"
};

export default Box;
