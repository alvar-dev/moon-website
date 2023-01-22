import classes from "./Accounts.module.css";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
    id: 0,
    companyName: "Sony Music Finland",
    username: "Sony.music",
    postAmount: 8,
  },
  {
    id: 1,
    companyName: "PME Records",
    username: "PME.records",
    postAmount: 2,
  },
  {
    id: 2,
    companyName: "Universal Music Finland",
    username: "Universal.fi",
    postAmount: 4,
  },
  {
    id: 3,
    companyName: "KPC Records",
    username: "KPC.records",
    postAmount: 1,
  }
]



function Accounts() {
  const navigate = useNavigate();
  return (
    <div className={classes.center}>
      <div className={classes.card}>
        <table className={classes.local} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>
                Company Name
              </th>
              <th>
                Username
              </th>
              <th>
                Post amounts
              </th>
              <th>
                Edit
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
              dummyData.map((i) => {
                return (
                  <tr className={classes.tr}>
                    <td>
                      {i.companyName}
                    </td>
                    <td>
                      {i.username}
                    </td>
                    <td>
                      {i.postAmount}
                    </td>
                    <td onClick={() => navigate(`/account/${i.id}`, {replace: true})}>
                      Edit
                    </td>
                    <td>
                      Delete
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Accounts;