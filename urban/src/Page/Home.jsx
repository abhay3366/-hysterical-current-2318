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
import Home_Data from "../Component/HomeData"
import Footer from "../Component/Footer";

function Home() {
  return (
    <>
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
            <section  style={{borderBottom:"15px solid gray"}}>
                <Container display={"flex"}  maxW='1150px' pb={"15"}>
                    <div className={homeStyle.why_urban_company}>
                        <Heading as='h3' size='lg' pb={10}>
                            Why Urban Company
                        </Heading>
                        {Home_Data.map((el)=>(
                            <ul>
                                <li className={homeStyle.why_urban_company_list}>
                                    {/* <Cont> */}
                                        {/* <div> */}
                                            <Image  
                                                src={el.src}
                                                alt={el.title}
                                                width={{md:"15%"}}
                                                objectFit='cover' 
                                                boxSize='100%px' 
                                                display={'inline-block'}
                                                pb={8}
                                                />
                                        {/* </div> */}
                                        <section>
                                            <Heading as='h4' size='md'>Transparent Price</Heading>
                                            <Text fontSize='lg'>See fixed the price before you book.No hidden charge</Text>
                                        </section> 
                                    {/* </Cont>  */}
                                </li>
                            </ul>
                        ))}
                    </div>
                        
                    <div  className={homeStyle.quality}>
                        <div>
                            <Image 
                            src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png" 
                            alt='img'
                            width={{md:"30%"}}  
                            />
                        </div>
                        <div >
                            <Heading as='h3' size='lg' pt={18}>100% Quality Assured</Heading>
                            <Text fontSize='xl' pt={5}>If you don't love our service,we will make it right</Text>
                        </div>
                    </div> 
                </Container> 
            </section>



            <section>
                <Container display={"flex"}  maxW='1150px' >
                    <div className={homeStyle.why_urban_company}>
                        <Heading as='h2' size='2xl' pb={10}>
                            Books Professional Form Your Phone
                        </Heading>
                        <Text fontSize='xl' pb={5}>Enter your mobile number to get the App download link</Text>
                        <InputGroup>
                            <InputLeftAddon children='+91' />
                            <Input type='tel' placeholder='phone number' w={"50%"} />
                            {/* <Button  colorScheme='teal' variant='outline'>
                                Send
                            </Button> */}
                            <InputRightAddon children='Submited' />
                        </InputGroup>
                       <Box>
                       <div className={homeStyle.playStore} style={{display:"flex"}}>
                            <div w={"50%"}>
                                <Link href='https://chakra-ui.com'   isExternal>
                                    <Image 
                                    src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png" 
                                    alt='playStore'
                                    w={"50%"}
                                    />
                                </Link>
                            </div>
                            <div w={"50%"}>
                                <Link href='https://chakra-ui.com'  isExternal>
                                    <Image 
                                    src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png" 
                                    alt='playStore'
                                    w={"50%"}
                                    />
                                </Link>
                            </div>
                        </div>
                       </Box>
                    </div>
                        
                    <div  className={homeStyle.mobileView}>
                        <div>
                            <Image 
                            src="https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png" 
                            alt='img'
                            width={{md:"100%"}}  
                            />
                        </div>
                        <div >
                            <Image 
                            src="https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png" 
                            alt='img'
                            width={{md:"100%"}}  
                            />
                        </div>
                    </div> 
                </Container> 
            </section>
            {/*Footer  */}
            <Footer/>
    </>
  )
}

export default Home