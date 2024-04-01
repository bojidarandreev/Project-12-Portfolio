import "./progressbar.scss";

export const ProgressBarDifferentColour = ({currentValue, maxValue}) => 
  <progress 
  className="progressBar"
  value={currentValue} 
  max={maxValue}
  >
    {currentValue}%
    <p className="progressBar__value">{currentValue}</p>
  </progress>