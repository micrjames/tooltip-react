import { Tooltip } from './components';

function App() {
  const types = [
	 "lower-left",
	 "default",
	 "lower-right",
	 "upper-left",
	 "upper",
	 "upper-right"
  ];
  return (
	 <div class="container">
	 	{types.map((type, index) => (
	 		<Tooltip
		   		key={index}
	 			type={type}
	 			text="some text"
	 			tooltipText="some tooltip text"
	 		/>
		))}
    </div>
  );
}

export default App;
