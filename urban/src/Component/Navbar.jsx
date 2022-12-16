import React from 'react'
import homeStyle from "../Css/Home.module.css"
import { 
    InputLeftAddon,
    InputGroup,
  Text,
  Select,
  Image,
  Input,
  Heading,
  Container,
  Link,
  InputRightAddon,
  HStack,
  Box,
  Flex

} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import Home_Data from "./HomeData"
import Footer from "./Footer";

// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

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


function Navbar() {
    // const { isOpen, onOpen, onClose } = useDisclosure();
   
    let activeStyle = {
        
        color:"orange"
      };

    return (
        <>  
            {/* Navbar  */}
            <div className={homeStyle.navContainer}>
                <div>
                    <Image src="/image/logo.png" alt='logImg'  ml={{lg:"50px"}} width={132} height={39}/>
                </div>
                <div className={homeStyle.navLink}> 
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
                </div>
            </div>


        </>
       
    );
}

export default Navbar


 {/* <Box px={4} pt={3} h={400} m={0} p={0} boxSize="borderBox" >
            <Box alignItems={'center'} justifyContent={'space-between'} bg={'blue.100'}>
                <Image src='https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg' alt="ing"/>
                <Box>
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
                </Box>
            </Box>
            <Text  fontSize='50px' color={"white"}>Home service, on demand</Text>
        </Box> */}


        // <Image 
        //             src='https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg'
        //             alt="ing"

        //              />
        //             {/* <Image 
        //                 src='https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg'
        //                 alt="ing"
        //                 objectFit='cover'
        //              /> */}