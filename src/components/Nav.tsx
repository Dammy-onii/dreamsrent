import logo from "../assets/logo/logo.svg";
import CustomButton from "../customs/CustomButton/CustomButton";

function Nav() {
  return (
    <div className="w-full h-20 bg-[#fff] flex flex-row items-center justify-between px-10">
      <img src={logo} alt="" />
      <div className="flex flex-row gap-4">
        <h2>Home</h2>
        <h2>Listings</h2>
        <h2>User</h2>
        <h2>Pages</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
      </div>
      <div className=" flex flex-row ">
        <CustomButton />
      </div>
    </div>
  );
}

export default Nav;
