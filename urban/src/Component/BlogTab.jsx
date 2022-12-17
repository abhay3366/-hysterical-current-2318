import React, { useState } from 'react'
import blogStyle from "../Css/Blog.module.css"
import { Tabs,Menu,Button,Flex,Divider,CardFooter,Text,Stack,Heading, TabList,CardBody, TabPanels, Tab, TabPanel,Image,Card } from '@chakra-ui/react'
import Community,{Culture,Company,Lifestyle} from '../Data/BlogData'
import { AiFillCaretDown } from "react-icons/ai";
import BlogFooter from './BlogFooter';
import { Link } from 'react-router-dom';



function BlogTab() {
  const [noOfElement, setnoOfElement] = useState(4)

  const slice=Community.slice(0,noOfElement);

  function loadMore(){

    setnoOfElement(noOfElement+2)
  }
  return (


    <>
     
      <Tabs defaultIndex={1}>
        <TabList display={"flex"} justifyContent={"space-between"}>
            <Tab>COMPANY</Tab>
            <Tab>CULTURE</Tab>
            <Tab>COMMUNITY</Tab>
            <Tab className={blogStyle.lifestyle}>LIFESTYLE</Tab>
        </TabList>
        <TabPanels  className={blogStyle.container}>
          {/* Company tab */}
       
          <TabPanel className={blogStyle.company_tab}>
          {
              Company.map((el)=>(
                
                <Card maxW='lg'>
              <CardBody>
                <Image
                  src={el.src}
                  alt={el.alt}
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{el.title}</Heading>
                  <Text>
                   {el.desc}
                  </Text>
                    <Flex justifyContent={"space-between"}>
                      <Text  fontSize='md' color='blue.600' >
                        {el.date}
                      </Text>
                      <li>{el.comment}</li>
                    </Flex>
                  
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                
              </CardFooter>
            </Card>


              ))
            }
            <Card maxW='lg'>
              <CardBody>
                <Image
                  src='https://blog.urbancompany.com/wp-content/uploads/2022/07/pros.jpg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>#UCUpskill — Rising with Urban Company</Heading>
                  <Text>
                    One of our key pillars of partner enablement is training and upskilling of 
                    our service professionals, visible in the investments made and priority awarded to
                  </Text>
                    <Flex justifyContent={"space-between"}>
                      <Text  fontSize='md' color='blue.600' >
                      JULY 28,2022 
                      </Text>
                      <li>NO COMMENTS</li>
                    </Flex>
                  
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                
              </CardFooter>
            </Card>


          </TabPanel>

          {/* Culture */}
          <TabPanel className={blogStyle.company_tab}>
           { Culture.map((el)=>(
            <Card maxW='lg'>
              <CardBody>
                <Image
                  src={el.src}
                  alt={el.alt}
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{el.title}</Heading>
                  <Text>
                   {el.desc}
                  </Text>
                    <Flex justifyContent={"space-between"}>
                      <Text  fontSize='md' color='blue.600' >
                        {el.date}
                      </Text>
                      <li>{el.comment}</li>
                    </Flex>
                  
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                
              </CardFooter>
            </Card>
            ))}
          </TabPanel>

          {/* Community */}

          <TabPanel className={blogStyle.company_tab}>
            { slice.map((el)=>(
              <Card maxW='lg'>
                <CardBody>
                  <Image
                    src={el.src}
                    alt={el.alt}
                    borderRadius='lg'
                    boxSize='400px'
                    objectFit='cover'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el.title}</Heading>
                    <Text>
                    {el.desc}
                    </Text>
                      <Flex justifyContent={"space-between"}>
                        <Text  fontSize='md' color='blue.600' >
                        {el.date}
                        </Text>
                        <li>{el.comment}</li>
                      </Flex>
                    
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  
                </CardFooter>
              </Card>
                

            ))}

              {
                noOfElement<Community.length?
                <Button colorScheme='teal' variant='outline' w={"100px"} onClick={loadMore}>
                Load More
              </Button>:null
              }
          </TabPanel>

          {/* Lifestyle */}
          <TabPanel className={blogStyle.company_tab}>
            { Lifestyle.map((el)=>(
              <Card maxW='lg'>
                <CardBody>
                  <Image
                    src={el.src}
                    alt={el.alt}
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el.title}</Heading>
                    <Text>
                    {el.desc}
                    </Text>
                      <Flex justifyContent={"space-between"}>
                        <Text  fontSize='md' color='blue.600' >
                          {el.date}
                        </Text>
                        <li>{el.comment}</li>
                      </Flex>
                    
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  
                </CardFooter>
              </Card>
              ))}







              {/* <ul className={blogStyle.menu}>
                <li><Link to="">Beauty</Link>
                   
                </li>
                <li><Link to="">Men</Link></li>
                <li><Link to="">Interior</Link></li>
                <li><Link to="">Homecare</Link></li>
                <li><Link to="">TUG Videos</Link></li>
              </ul> */}
          </TabPanel>

        </TabPanels>
      </Tabs>
      <BlogFooter/>
    </>
  )
}

export default BlogTab