import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
// 
// interface Props {
//   onSearch: (search: string) => void;
// }

const NavBar = () => {
  return (
    <HStack padding={'10px'}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput/>
      {/* <SearchInput onSearch={(search)=>onSearch(search)}/> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
