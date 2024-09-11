import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
//
// interface Props {
//   onSearch: (search: string) => void;
// }

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"60px"} objectFit={'cover'} />
      </Link>
      <SearchInput />
      {/* <SearchInput onSearch={(search)=>onSearch(search)}/> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
