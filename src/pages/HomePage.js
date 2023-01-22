import classes from "./HomePage.module.css";
import Post from "../components/post/PostList";

function HomePage() {
  return (
    <div className={classes.center}>
      <Post />
    </div>
  )
}

export default HomePage;