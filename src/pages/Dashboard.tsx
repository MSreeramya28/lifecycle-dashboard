import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../services/queries";
import UserCard from "../component/Usercard";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Dashboard</h2>
        <div style={{
          display: "grid",
           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
           gap: "20px"
        }}>
          {data.countries.map((c: any) => (
            <UserCard
              key={c.code}
              name={c.name}
              extra1={`Code: ${c.code}`}
              extra2={`Capital: ${c.capital || "N/A"}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;