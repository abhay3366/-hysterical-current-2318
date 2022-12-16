import React from 'react'
import blogStyle from "../Css/Blog.module.css"
import { Flex, Image,Link } from '@chakra-ui/react'
import { AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillLinkedin} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";

function BlogFooter() {
  return (
    <>
        <div className={blogStyle.BlogFooter}>
            <div>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            </div>
            <Flex>
                <div>
                <Image 
                    src="https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png" 
                    alt='img'
                    width={{md:"100%"}}  
                />
                </div>
                <div>
                <Image 
                    src="https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png" 
                    alt='img'
                    width={{md:"100%"}}  
                />
                </div>
            </Flex>
            <div className={blogStyle.social_icons} >
                <Link to=""><AiFillTwitterSquare size={"30px"}/></Link>
                <Link to=""><AiFillFacebook size={"30px"}/></Link>
                <Link to=""><AiFillInstagram size={"30px"}/></Link>
                <Link to=""><FaPinterestSquare size={"30px"}/></Link>
                <Link to=""><AiFillLinkedin size={"30px"}/></Link>
            </div>
        </div>
    </>
  )
}

export default BlogFooter