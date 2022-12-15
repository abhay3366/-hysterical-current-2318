import React from 'react'
import homeStyle from "../Css/Home.module.css"
import { 
    Box,
  Flex,
  Text,
  Select,
  Image,
  Button,
  Heading,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  background,
  Container,
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

            {/* Banner */}

            <div className={homeStyle.home_banner} >
                <div>
                    {/* <div className={homeStyle.banner_black_overlay}
                    style={{
                        width:"683px",
                        height:"550px",
                        position:"absolute",
                        left:"0px",
                        top:"63px",
                        zIndex:"999", 
                        }}>fsaddf</div> */}
                    <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg' alt="ing"/>
                </div>
                <div className={homeStyle.home_banner_content}>
                    <div className={homeStyle.banner_data}>
                        <Text fontSize='2xl' color={"white"}>URBAN COMPANY</Text>
                        <Heading as='h3' size='xl'  color={"white"} mt={3}>
                            Quality home service,on demand
                        </Heading>
                        <Text fontSize='2xl' color={"white"} mt={4}>Experienced,hand-picked Professional to serve you at your doorstep</Text>

                        <div style={{backgroundColor:"white",width:"350px",height:"120px",marginTop:"30px"}}>
                            <Text fontSize='xl' p={4}>Where do you need a service?</Text>
                            <Select placeholder='Select your city' style={{marginLeft:"20px",width:"300px"}}>
                                <option value='option1'>India</option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container */}

            <div className={homeStyle.why_urban_company}>
                <Heading as='h3' size='lg'>
                    Why Urban Company
                </Heading>
                <ul>
                    <li style={{display:"flex"}}>
                        <div>
                            <img src='https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png' alt="img"/>
                        </div>
                        <section>
                            <Heading as='h4' size='md'>Transparent Price</Heading>
                            <Text fontSize='lg'>See fixed the price before you book.No hidden charge</Text>
                        </section>
                    </li>
                    <li style={{display:"flex"}}>
                        <div>
                            <img src='https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png' alt="img"/>
                        </div>
                        <section>
                            <Heading as='h4' size='md'>Transparent Price</Heading>
                            <Text fontSize='lg'>See fixed the price before you book.No hidden charge</Text>
                        </section>
                    </li>
                    <li style={{display:"flex"}}>
                        <div>
                            <img src='https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png' alt="img"/>
                        </div>
                        <section>
                            <Heading as='h4' size='md'>Transparent Price</Heading>
                            <Text fontSize='lg'>See fixed the price before you book.No hidden charge</Text>
                        </section>
                    </li>
                    
                </ul>
                

                <div>
                    {/* <div>
                        <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png" />
                    </div>
                    <div>
                        <h3>100% Quality Assured</h3>
                        <p>If you don't love our service,we will make it right</p>
                    </div> */}
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