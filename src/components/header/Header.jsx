import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Travel</span>
        <span className="headerTitleLg">Time</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1064162.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}
