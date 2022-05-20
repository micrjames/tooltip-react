import './index.scss';

const Tooltip = ({ type, text, tooltipText }) => {
   return (
	  <div class={`tooltip ${type}`}>
		 {text} 
         <div class="tooltip-text">{tooltipText}</div>
     </div> 
   );
};

export default Tooltip;
