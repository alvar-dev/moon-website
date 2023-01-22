import classes from "./PostList.module.css";
const dummyData = [
  {
    id: 0,
    artist: "Sexmane",
    songName: "KNHR (feat. Topi Alanko)",
    prices: [20, 50, 100],
    priceAmounts: [10, 4, 2],
  },
  {
    id: 1,
    artist: "Turisti",
    songName: "Big Steppa",
    prices: [20, 50, 100],
    priceAmounts: [10, 4, 2],
  },
  {
    id: 2,
    artist: "Ibe",
    songName: "FAMOUS",
    prices: [20, 50, 100],
    priceAmounts: [10, 4, 2],
  },
  {
    id: 3,
    artist: "Gettomasa",
    songName: "Vastustamaton",
    prices: [20, 50, 100],
    priceAmounts: [10, 4, 2],
  }
]

function Post() {
  return (
    <div className={classes.card}>
      <table className={classes.local}>
        <thead>
          <tr>
            <th>
              Song name
            </th>
            <th>
              Artist
            </th>
            <th>
              Prices
            </th>
            <th>
              Price amounts
            </th>
            <th colSpan={2} style={{ textAlign: "center" }}>
              Manage
            </th>
          </tr>
        </thead>
        <tbody>
          {
            dummyData.map((i) => {
              return (
                <tr className={classes.tr}>
                  <td>
                    {i.songName}
                  </td>
                  <td>
                    {i.artist}
                  </td>
                  <td>
                    {i.prices.toString()}
                  </td>
                  <td>
                    {i.priceAmounts.toString()}
                  </td>
                  <td style={{textAlign: "center"}}>
                    Edit
                  </td>
                  <td style={{textAlign: "center"}}>
                    Delete
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
export default Post;