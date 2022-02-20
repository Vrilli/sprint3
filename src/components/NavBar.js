import { NavLink } from "react-router-dom";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Search } from "./Search";
import "../styles/Navbar.Module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../action/actionLogin";


const NavBar = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logout());
      navigate("/Login");
    };

  return (

    <Flex
      className="navbar"
      bg="#0F0E17"
      w="100%"
      px={10}
      py={4}
      justifyContent="space-between"
      alignItems="center"
      marginTop="2%"
    >
      <Flex
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
        marginLeft="7%"
      >
        <Link to="/">
          <Image
            maxWidth="50%"
            src="https://res.cloudinary.com/vrilli/image/upload/v1645071224/logo-blockBuster_zu0fdo.png"
            size={35}
          />
        </Link>
      </Flex>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link
          as={NavLink}
          to="/"
          px={2}
          fontSize="17px"
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
        >
          Todas
        </Link>
        <Link
          as={NavLink}
          to="/*"
          px={2}
          fontSize="15px"
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
        >
          Más Valoradas
        </Link>
        
        <Link
          as={NavLink}
          to="/*"
          px={2}
          fontSize="15px"
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
        >
          Menos Valoradas{" "}
        </Link>
        <Search />
        <div>
          <button onClick={() => handleLogout()}>logout</button>
        </div>
      </Box>
    </Flex>
  );
};

export default NavBar;
