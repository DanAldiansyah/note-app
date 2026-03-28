import logout from "../assets/icons/logout.png";

const Navbar = () => {
  return (
    <header className="z-1 py-2 px-6 flex justify-between items-center bg-(--primary) border-b border-gray-300 fixed top-0 left-0 right-0">
      <div>
        <h1>Daftar Tugas</h1>
        <p>Welcome Aldan!</p>
      </div>
      <div>
        <button className="flex gap-2 px-4 py-2 bg-(--secondary) border border-gray-500 rounded-lg ">
          <img src={logout} alt="" /> Keluar
        </button>
      </div>
    </header>
  );
};

export default Navbar;
