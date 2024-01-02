import { PostType } from "../../types";

export const handleSubmit = async (formData: PostType): Promise<void> => {
	try {
		const url = `http://localhost:3000/posts`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		const data = await response.json();
		console.log("handleSubmit ~ data >", data);
		if (response.ok) {
			alert("Post created");
		}
	} catch (error) {
		console.log(error);
	}
};

export async function fetchPosts(): Promise<PostType[] | []> {
	const url = `http://localhost:3000/posts`;

	return fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				console.error("Failed to fetch");
				throw new Error("Failed to fetch"); // Throw an error to trigger the catch block
			}
		})

		.catch((error) => {
			console.error("Error during fetch:", error.message);
			return [];
		});
}

export async function get_single_post(id: number): Promise<PostType | {}> {
	try {
		const url = `http://localhost:3000/posts/${id}`;
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error("Faild to fetch a single post");
		}
	} catch (error: any) {
		console.error(error.message);
		return {};
	}
}
