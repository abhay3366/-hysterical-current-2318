import React from 'react'
import { 
    Box,
  Flex,
  Text,
  HStack,
  Image,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
// import logo from "../image/logo.png"

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

//!Navlinks of navbar
const Links=[
    {
        to:"/",
        title:"Home"
    },
    {
        to:"/blog",
        title:"Blog"
    },
    {
        to:"/registerdProfessional",
        title:"Registered As A Professional"
    },
    {
        to:"/helpCenter",
        title:"Help Center"
    },
    {
        to:"/login",
        title:"Login/Sign Up"
    },
]
//!Home background image
const backgroundImageStyle={
    disply:"flex",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundImage:"url(https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg)",
    backgroundSize:"cover"
}

function Navbar() {
    // const { isOpen, onOpen, onClose } = useDisclosure();
   
    let activeStyle = {
        
        color:"white"
      };

    return (
      <>
        <Box px={4} pt={3} h={400} 
            style={backgroundImageStyle}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                 <Box>
                    <Image src="/image/logo.png" alt='logImg' ml={{lg:"50px"}} width={132} height={39}/>
                 </Box>
                <HStack spacing={7} alignItems={'center'} mr={{lg:"50px"}}>
                    {
                        Links.map((nav)=>(
                            <NavLink to={nav.to}
                                style={({ isActive }) =>
                                 isActive ? activeStyle : undefined
                                }
                                end
                            >
                                {nav.title}
                            </NavLink>
                        ))
                    }
                </HStack>
            </Flex>
            <Text fontSize color={"white"}>Home service, on demand</Text>
        </Box>
      </>
    );
}

export default Navbar