import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Next Destination
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Followtheboat is a unique travel blog that focuses on a specific mode of transport: sailing. 

      It is created with love by a travel writer Liz Cleere and photographer Jamie Furlong. There’s also Millie the rescue cat, which functions as a source of inspiration and encouragement for the blog’s human founders. 

      Despite the focus on sailboats, Followtheboat’s content isn’t just made for sailors. The posts are tailor-made for travelers who also happen to be interested in the art and joys of sailing. 

      Don’t be surprised at the humor and dynamic range of topics on the blog. You’ll find posts like “tools you need on a sailboat” and “is this the weirdest loo in the world?”

      Followtheboat also has a library of podcasts, which record Liz and Jamie’s experiences on their travels. 
      </p>
    </div>
  );
}
