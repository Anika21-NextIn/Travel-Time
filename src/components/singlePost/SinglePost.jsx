import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
        Travel House
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Anika
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Destination means death to me. If I could figure out a way to remain forever in transition, in the disconnected and unfamiliar, I could remain in a state of perpetual freedom.
        The soul of a journey is liberty, perfect liberty, to think, feel, do just as one pleases.
          <br />
          <br />
          We must get beyond textbooks, go out into the bypaths and untrodden depths of the wilderness and travel and explore and tell the world the glories of our journey.
          Does the road wind up-hill all the way? Yes, to the very end. Will the day’s journey take the whole long day? From morn to night, my friend.
        </p>
      </div>
    </div>
  );
}
