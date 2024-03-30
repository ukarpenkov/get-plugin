import {
  setSliderSettings, initSlider, initTooltips,
} from "./src/slider-plugin/index.20a44db0";



let slider1 = new (0, setSliderSettings)("1", "interval", "horizontal", 1, 50, 1, 100, 1, true, true);
slider1.init();

(0, initSlider)(".slider-page");
(0, initTooltips)();
console.log('fff')