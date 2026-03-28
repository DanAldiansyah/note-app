import { Link } from "react-router";
const Navbar = () => {
  const date = new Date();
  const localDate = date.toLocaleDateString("id-ID", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="z-1 flex justify-between items-center bg-(--primary) border-b border-(--neon-green) fixed top-0 left-0 right-0 p-4">
      <div className="text-(--neon-green)">
        <Link to="/" className="text-base font-medium">
          MyTasks
        </Link>
      </div>
      <div className="text-(--neon-green) text-base">{localDate}</div>
      <div className="text-(--neon-green) text-base">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
