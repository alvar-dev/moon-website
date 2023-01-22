import classes from "./NewPost.module.css";
import { useState } from "react";

const input = {
  backgroundColor: "transparent",
  border: "none",
  resize: "none",
  width: "100%",
};



function NewPost() {
  const [selectedImage, setSelectedImage] = useState("https://upload.wikimedia.org/wikipedia/commons/1/16/No_image_available_450_x_600.svg");

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className={classes.center}>
      <div className={classes.card} id="card">
        <form>
          <table className={classes.local} style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Song name</th>
                <th>Prices</th>
                <th>Price amounts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input
                  style={input}
                  type="text"
                  autoComplete="off"
                  required
                  id="artist"
                /></td>
                <td><input
                  style={input}
                  type="text"
                  autoComplete="off"
                  required
                  id="songName"
                /></td>
                <td><input
                  style={input}
                  type="text"
                  autoComplete="off"
                  required
                  id="prices"
                /></td>
                <td><input
                  style={input}
                  type="text"
                  autoComplete="off"
                  required
                  id="priceAmounts"
                /></td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="4">
                  Creative Brief
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4"><textarea
                  rows={5}
                  style={input}
                  type="text"
                  autoComplete="off"
                  required
                  id="name"
                /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <form className={classes.row} >
          <input type="file" onChange={imageChange} accept="image/*"/>
        </form>
        <br />
        <button className={classes.button}>
          Upload
        </button>
      </div >
      <div className={classes.cover}>
        <img src={selectedImage} className={classes.image} alt="Ei kuvaa"/>
      </div>
    </div >
  )
}

export default NewPost;