import Sidebar from "../reusable/Sidebar";
import SetTimeoutComponent from "./SetTimeoutComponent";

const Async = () => {
	return (
		<div>
			<Sidebar />
			<SetTimeoutComponent />
			<p>Async page</p>
		</div>
	);
};

export default Async;


