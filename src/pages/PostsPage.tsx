import Sidebar from "../components/reusable/Sidebar";
import Posts from "../components/posts/Posts";
import PostList from "../components/posts/PostList";

const PostsPage = () => {
	return (
		<div>
			<Sidebar />
			<Posts />
			<PostList />
		</div>
	);
};

export default PostsPage;
