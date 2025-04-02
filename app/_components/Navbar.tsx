import DarkMode from "./DarkMode";
import LinksDisplay from "./LinksDisplay";
import LogoContainer from "./LogoContainer";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  return (
    <nav
      className="sticky z-[100] h-24  inset-0 top-0 w-full border-b
    border-gray-200 bg-white/75 backdrop-blur-lg transition-all flex items-center justify-between shadow  "
    >
      <LogoContainer />
      <LinksDisplay />
      <div className="m-3 flex items-center gap-4">
        <DarkMode />
        {/* search */}
        <div className="hidden md:block">
          <SearchBar />
        </div>
        {/* user */}
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
