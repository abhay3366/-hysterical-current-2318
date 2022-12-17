import React from 'react'
import homeStyle from "../Css/Home.module.css"
import { 
    FormControl,
    FormLabel,
    Text,
    FormHelperText,
  Button,
  Image,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link

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
    
]


function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
   
    let activeStyle = {
        
        color:"orange"
      };

    //   !Signup
    function signupModel(){
        
    }
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
                            <NavLink to={nav.to} ref={btnRef}  colorScheme='teal' onClick="{onOpen}"
                                style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                                }
                                end
                                
                            >
                                {nav.title}
                            </NavLink>
                        ))
                    }
                    {/* login btn */}
                    <Button ref={btnRef} colorScheme='teal' variant='link' onClick={onOpen} pb="18px"  >
                         Login
                    </Button>
                    <Drawer
                        
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent mt={"55px"}>
                        <DrawerCloseButton />
                        <DrawerHeader>Login</DrawerHeader>

                        <DrawerBody>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' placeholder='Enter email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>

                            <FormLabel>Password</FormLabel>
                            <Input pr='4.5rem' type= 'password' placeholder='Enter password' />

                            <Input pr='4.5rem' mt={"20px"} type= 'submit' value="Login" bg={"#179848"} color={"white"}/>
                            
                            <DrawerFooter>
                            <Text>
                                Don't have a account yet ?{' '}
                                <Link color='teal.500' href='#' onClick={signupModel}>
                                    SignUp
                                </Link>
                            </Text>
                            </DrawerFooter>
                    
 
                        </FormControl>
                        </DrawerBody>

                        
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>


        </>
       
    );
}

export default Navbar

