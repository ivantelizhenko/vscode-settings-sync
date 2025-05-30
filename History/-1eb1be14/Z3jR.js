import React from "react";

export function getDisplayedValue(value, children) {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find((child) => child.props.value === value);

  return selectedChild.props.children;
}

function getTextWidth(text, font) {
  const span = document.createElement("span");

  span.textContent = text;

  span.style.visibility = "hidden";
  span.style.whiteSpace = "nowrap";
  span.style.font = font;

  document.body.appendChild(span);

  const width = span.offsetWidth;

  document.body.removeChild(span);

  return width;
}

const displayedValue = "Ваш текст для вимірювання";
const font = "16px Arial"; // Вкажіть шрифт, розмір та інші стилі
const textWidth = getTextWidth(displayedValue, font);
console.log(`Ширина тексту: ${textWidth}px`);
