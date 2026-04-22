type Props = {
  name: string;
  extra1: string;
  extra2: string;
};

const UserCard = ({ name, extra1, extra2 }: Props) => {
  return (
    <div style={{
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{name}</h3>
      <p>{extra1}</p>
      <p>{extra2}</p>
    </div>
  );
};

export default UserCard;