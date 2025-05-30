import React from "react";

export function getDisplayedValue(value, children) {
  const childArray = React.Children.toArray(children);
  console.log(childArray);
  const selectedChild = childArray.find((child) => child.props.value === value);

  return selectedChild.props.children;
}

export function getTextWidth(text, fontSize) {
  const span = document.createElement("span");
  span.textContent = text;
  span.style.visibility = "hidden";
  span.style.whiteSpace = "nowrap";
  span.style.fontSize = fontSize + "px";
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);
  return width;
}
