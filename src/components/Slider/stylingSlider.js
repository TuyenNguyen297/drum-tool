

const sliderProgressing = ({ slider, indicator }) => {
  const range = slider.max - slider.min;
  const middle = range / 2;
  const value = slider.value;
  const thumbDiameter = 30;
  const padding =
    parseInt(
      window
        .getComputedStyle(slider, null)
        .getPropertyValue("padding-left")
        .replace(/[^\d]+/g, "")
    ) +
    thumbDiameter / 2;
  const trackWidth = slider.clientWidth - padding * 2;

  let step = `${((value - middle) / range) * trackWidth}px`;
  indicator.style.cssText = `left: ${step}; visibility:visible`;

  let percent = `${Math.floor(((value - slider.min) / range) * 100)}`;
  slider.style.setProperty("--progress", `${percent}%`);
};

function hideElement(element) {
  setTimeout(() => {
    element.style.setProperty("visibility", "hidden");
  }, 1000);
}

export { sliderProgressing, hideElement };
