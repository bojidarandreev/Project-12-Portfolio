import "./progressbar.scss";

export const ProgressBarDifferentColour = ({currentValue, maxValue}) => 
  <progress 
  className="progressBar"
  value={currentValue} 
  max={maxValue}
  >
    {currentValue}%
    {/* <span className="progressBar__value">{currentValue}</span> */}
  </progress>