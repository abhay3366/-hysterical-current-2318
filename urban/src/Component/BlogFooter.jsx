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
                <Image boxSize="65%"  src='https://blog.urbancompany.com/wp-content/uploads/2022/09/the-urban-life-logo-768x187.png' alt='Dan Abramov' />
            </div>
            <Flex>
                <div>
                <Image 
                    src="https://blog.urbancompany.com/wp-content/uploads/2022/09/OIP-1.jpg" 
                    alt='img'
                    width={{md:"100%"}}
                    boxSize="75%"   
                />
                </div>
                <div>
                <Image 
                    src="https://blog.urbancompany.com/wp-content/uploads/2022/09/download-1-1.png" 
                    alt='img'
                    width={{md:"100%"}}  
                    boxSize="75%"   
                />
                </div>
            </Flex>
            <div className={blogStyle.social_icons} >
                <Link to=""><Image src='https://blog.urbancompany.com/wp-content/uploads/2022/09/instagram-2.png' /></Link>
                <Link to=""><AiFillTwitterSquare size={"60px"} color="#1DA1F2"/></Link>
                <Link to=""><AiFillFacebook size={"50px"} color="#1DA1F2"/></Link>
                <Link to=""><FaPinterestSquare size={"70px"} color="#B7081B"/></Link>
                <Link to=""><AiFillLinkedin size={"60px"} color="#0077B5"/></Link>
            </div>
        </div>
    </>
  )
}

export default BlogFooter