import { UseAppDispatch, useAppSelector } from "../features/hooks";
import { Posts } from "../features/posts/posts.interface";
import {
  addPostsAsync,
  getPostsAsync,
  getPostStatus,
  initPosts,
} from "../features/posts/postsSlice";

const ReduxApp = () => {
  const posts: Posts[] = useAppSelector(initPosts);
  const status = useAppSelector(getPostStatus);

  const dispatch = UseAppDispatch();

  if (status === "idle") {
    dispatch(getPostsAsync({}));
  }

  function handleAddData() {
    const getLength = posts.length;
    dispatch(addPostsAsync({ start: getLength }));
  }

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div key={post.id}>
            <h3>
              <span>{post.title}</span>
              <span>| {post.id}</span>
            </h3>
          </div>
        );
      })}
      <button
        className="bg-slate-800 rounded text-slate-50 py-2 px-5"
        onClick={handleAddData}
      >
        add Data (+)
      </button>
    </div>
  );
};

export default ReduxApp;
