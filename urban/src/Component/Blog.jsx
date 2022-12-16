import React from 'react'
import { 
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Button,

 } from '@chakra-ui/react'
 import { AiOutlineSearch } from "react-icons/ai";
import blogStyle from "../Css/Blog.module.css"
import BlogTab from './BlogTab';

function Blog() {
  return (
    <>
        {/* Banner */}
        <div className={blogStyle.banner}>
          <Image src='/image/blogBanner.jpg'  boxSize='600px'  objectFit='cover' alt='Dan Abramov' w={"100%"} opacity={"0.4"}/>
          <div className={blogStyle.blogSearch}>
            <InputGroup size='md'>
              <Input placeholder='Search' size='md' w={"450px"}/>
              <InputRightElement width='4.5rem'>
                <Button>
                    <AiOutlineSearch color='black'/>
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
        </div>
        {/* Blog Tab */}
        <BlogTab/>
    </>
  )
}

export default Blog