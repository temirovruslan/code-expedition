import { useState, ChangeEvent } from "react";
import { PostType } from "../../types";
import { handleSubmit } from "./logic";

const Posts = () => {
	const [data, setData] = useState<PostType>({
		id: null,
		title: "",
		description: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handleForSubmit = async () => {
		const id = Date.now();
		const formData = {
			id,
			title: data.title,
			description: data.description,
		};

		handleSubmit(formData);
		setData({ id: null, title: "", description: "" });
	};

	return (
		<form
			onSubmit={handleForSubmit}
			className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
		>
			<div className="mb-4">
				<label
					htmlFor="title"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Title
				</label>
				<input
					onChange={handleChange}
					className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					name="title"
					type="text"
					value={data.title}
					id="title"
					required
					placeholder="Enter movie title"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="description"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Description
				</label>
				<textarea
					onChange={handleChange}
					className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					name="description"
					id="description"
					required
					value={data.description}
					placeholder="Enter movie description"
				></textarea>
			</div>
			<button
				onClick={handleForSubmit}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
			>
				Submit
			</button>
		</form>
	);
};

export default Posts;
