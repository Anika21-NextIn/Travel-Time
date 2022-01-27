import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/3962213/pexels-photo-3962213.jpeg?cs=srgb&dl=pexels-anna-shvets-3962213.jpg&fm=jpg" />
      <Post img="https://www.rd.com/wp-content/uploads/2017/12/00_Top-Travel-Trends-for-2018_209155915_06photo_FT.jpg"/>
      <Post img="https://fthmb.tqn.com/j9g9QpEQBSRMeULzTgr5iyhHjec=/2121x1414/filters:fill(auto,1)/GettyImages-529367886-5a016ebb9802070037ff12a9.jpg"/>
      <Post img="https://images.hellogiggles.com/uploads/2018/05/01132453/woman-adventure-e1525206315254.jpg"/>

      <Post img="https://tse4.mm.bing.net/th?id=OIP.hS3lmYPQgk4TocGbbIPnzwHaEK&pid=Api&P=0&w=338&h=190" />
      <Post img="https://tse2.mm.bing.net/th?id=OIP.KM4ZKcnxcN5jz7vf92RUnQHaE7&pid=Api&P=0&w=265&h=177" />
      <Post img="https://tse4.mm.bing.net/th?id=OIP.vnPp4X0EDGjXpxV1uyA0cgHaEo&pid=Api&P=0&w=245&h=153"/>
      <Post img="https://tse4.mm.bing.net/th?id=OIP.en4jZjaRiXuC3LVBu9PGYQHaE8&pid=Api&P=0&w=230&h=153"/>
      <Post img="https://tse2.mm.bing.net/th?id=OIP._KIHxL3MYok8PgbWNutoTQHaE8&pid=Api&P=0&w=256&h=171"/>
    </div>
  );
}
