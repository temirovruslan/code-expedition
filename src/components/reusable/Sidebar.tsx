import { Link } from "react-router-dom";
import { links } from "../../constants";

const Sidebar = () => {
	return (
		<header className="bg-gray-800 text-white p-4 sticky top-0">
			<nav>
				<ul className="flex">
					{links.map((link) => {
						return (
							<li key={link.title} className="mr-4">
								<Link to={link.link}>{link.title}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Sidebar;
