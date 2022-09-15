import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  const Post = [
    {
      username: "Thidayu Peaungtham 640610627",
      userImagePath: "/profileImages/Thidayu.jpg",
      postText: "Quiz ยากนะค่ะ #261207",
      likeNum: 100,
      comment: comments,
    },
  ];

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        {Post.map((x) => (
          <PostOwner
            name={x.username}
            img={x.userImagePath}
            text={x.postText}
            like={x.likeNum}
            reply={x.comment}
          />
        ))}
      </div>
    </div>
  );
}
