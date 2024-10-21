import { useState } from "react";
import logo from "../assets/logo/logo.svg";
import CustomButton from "../customs/CustomButton/CustomButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-20 bg-[#fff] flex flex-row items-center justify-between px-6 lg:px-10 fixed z-50 shadow-md top-0 left-0">
      <img src={logo} alt="" />

      <div className="hidden lg:flex flex-row gap-4">
        <h2>Home</h2>
        <h2>Listings</h2>
        <h2>User</h2>
        <h2>Pages</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMobileMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      <div className="hidden lg:flex flex-row items-center gap-4">
        <CustomButton icon="person" text="Sign In" color="gray" />
        <CustomButton icon="lock" text="SignUp" color="orange" />
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center lg:hidden">
          <h2 className="py-2" onClick={toggleMobileMenu}>Home</h2>
          <h2 className="py-2" onClick={toggleMobileMenu}>Listings</h2>
          <h2 className="py-2" onClick={toggleMobileMenu}>User</h2>
          <h2 className="py-2" onClick={toggleMobileMenu}>Pages</h2>
          <h2 className="py-2" onClick={toggleMobileMenu}>Blog</h2>
          <h2 className="py-2" onClick={toggleMobileMenu}>Contact</h2>
          <div className="flex flex-row items-center gap-4 py-4">
            <CustomButton icon="person" text="Sign In" color="gray" />
            <CustomButton icon="lock" text="SignUp" color="orange" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
