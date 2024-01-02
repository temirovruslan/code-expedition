import { fetchPosts, get_single_post } from "./logic";
import { useEffect, useState } from "react";
import { PostType } from "../../types";
import { Button, Modal } from "antd";

const PostList = () => {
	const [posts, setPosts] = useState<PostType[]>([]);
	const [updatedPost, setUpdatedPost] = useState<PostType>();

	useEffect(() => {
		const fetch = () => {
			fetchPosts()
				.then((data) => setPosts(data))
				.catch((error) => console.error(error));
		};

		fetch();
	}, [posts]);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = async (id: number) => {
		try {
			setIsModalOpen(true);
			const getPost = await get_single_post(id);
			setUpdatedPost(getPost as PostType);
		} catch (error) {
			console.error(error);
		}
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-[30px] font-bold my-6">Posts:</h1>
			<Modal
				title="Edit post:"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				{updatedPost && (
					<form className="flex flex-col">
						<input
							className="font-medium"
							type="text"
							value={updatedPost.title}
						/>
						<input
							className=""
							type="text"
							value={updatedPost.description}
						/>
					</form>
				)}
			</Modal>
			{posts && <Post posts={posts} openModal={openModal} />}
		</div>
	);
};

export interface PostProps {
	posts: PostType[];
	openModal: (id: number) => void;
}

const Post: React.FC<PostProps> = ({ posts, openModal }) => {
	return (
		<ul className="list-none flex flex-col">
			{posts.map((post, i) => {
				return (
					<li key={i} className="border mb-4 pb-4">
						<div className="flex items-center ">
							<h3 className="font-bold text-lg mb-2 mr-4">
								{post.title}
							</h3>
							<Button
								type="primary"
								className="bg-[#3232dd44]"
								onClick={() => openModal(post.id)}
							>
								Edit
							</Button>
						</div>
						<p className="text-gray-700">{post.description}</p>
					</li>
				);
			})}
		</ul>
	);
};
export default PostList;
