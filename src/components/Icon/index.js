/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  const {mode} = p;

  const style = {
    transition: t => t.transitions[1]
  }

  const foreground = !mode ? "#000000" : "#FFFFFF";
  const background = !mode ? "#FFFFFF" : "#000000";

  return (
    <svg width="16px" height="16px" viewBox="0 0 16 16">
      <g id="Group-2">
          <circle sx={style} id="Oval" fill={foreground} cx="8" cy="8" r="8"></circle>
          <circle sx={style} id="Oval" fill={background} cx="8" cy="8" r="6"></circle>
          <polygon sx={style} id="Rectangle" fill={foreground} points="8 1 14.42141 3.89586497 14 12.2800862 8 15"></polygon>
      </g>
    </svg>
  )
}