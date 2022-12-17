import React from 'react'
import { Container, Text,Heading,Box, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft,AiOutlineDollar,AiFillDiff,AiFillAlipayCircle,AiFillCodeSandboxCircle,AiOutlineSafety,AiOutlineUserAdd,AiOutlineRight } from "react-icons/ai";
import helpStyle from "../Css/Helpdesk.module.css"

function HelpCenter() {
  const navigate = useNavigate();
  function backFun(){
    // console.log("hell")
    navigate('/blog',{replace:true})
  }
  return (
    <>
      <Container pt={"63px"}>
        <div className={helpStyle.helpYou}>
          <button onClick={backFun} style={{paddingTop:"20px", paddingBottom:"20px",paddingLeft:"10px"}}><AiOutlineArrowLeft/></button>
          <Heading as='h2' size='xl' pl={"10px"}>
            How can we help you?
          </Heading>
        </div>
        <div>
        <Text fontSize='2xl' pt={"15px"} pb={"15px"} fontWeight="bold"> All topics</Text>

        <div>
          <ul>
              <li className={helpStyle.table}>
                  <Flex gap={"10px"}>
                    <Box p={"8px"}><AiOutlineUserAdd size={"25px"}/></Box>
                    <Box  p={"8px"}>Account</Box>
                  </Flex>
                  <div>
                    <Box  p={"8px"}>
                      <AiOutlineRight size={"20px"} />
                    </Box>
                  </div>
              </li>
              
              <li className={helpStyle.table}>
                  <Flex gap={"10px"}>
                    <Box pt={"8px"}><AiFillAlipayCircle size={"25px"}/></Box>
                    <Box  p={"8px"}>Getting started with UC</Box>
                  </Flex>
                  <div>
                    <Box  p={"8px"}>
                      <AiOutlineRight size={"20px"}/>
                    </Box>
                  </div>
              </li>

              <li className={helpStyle.table}>
                  <Flex gap={"10px"}>
                    <Box pt={"8px"}><AiFillCodeSandboxCircle size={"25px"}/></Box>
                    <Box  p={"8px"}>Payment  & UC Credit</Box>
                  </Flex>
                  <div>
                    <Box  p={"8px"}>
                      <AiOutlineRight size={"20px"}/>
                    </Box>
                  </div>
              </li>

              <li className={helpStyle.table}>
                  <Flex gap={"10px"}>
                    <Box pt={"8px"}><AiOutlineDollar size={"25px"}/></Box>
                    <Box  p={"8px"}>UC Plus Membership</Box>
                  </Flex>
                  <div>
                    <Box  p={"8px"}>
                      <AiOutlineRight size={"20px"}/>
                    </Box>
                  </div>
              </li>

              <li className={helpStyle.table}>
                  <Flex gap={"10px"}>
                    <Box pt={"8px"}><AiOutlineSafety size={"25px"}/></Box>
                    <Box  p={"8px"}>UC Safety</Box>
                  </Flex>
                  <div>
                    <Box  p={"8px"}>
                      <AiOutlineRight size={"20px"}/>
                    </Box>
                  </div>
              </li>

              <li className={helpStyle.table}>
                  <Flex gap={"10px"}>
                    <Box pt={"8px"}><AiFillDiff size={"25px"}/></Box>
                    <Box  p={"8px"}>Warranty</Box>
                  </Flex>
                  <div>
                    <Box  p={"8px"}>
                      <AiOutlineRight size={"20px"}/>
                    </Box>
                  </div>
              </li>
          </ul>
        </div>

        </div>
      </Container>
    </>
    
  )
}

export default HelpCenter