import React from 'react'
import { Link} from 'react-router-dom'
import '../App.css';

import { Heading,Image,Text } from '@chakra-ui/react'
import homeStyle from "../Css/Home.module.css"
import { AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillLinkedin} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";



let Footer_Links=[
    {
        to:"/",
        title:"About Us"
    },
    {
        to:"",
        title:"UC Impact"
    },
    {
        to:"",
        title:"Term & Condition"
    },
    {
        to:"",
        title:"Privacy Policy"
    },
    {
        to:"",
        title:"Internet-Based Advertising"
    },
    {
        to:"",
        title:"Anti Discrimination Policy"
    },
    {
        to:"",
        title:"Partner welfare Policy"
    },
    {
        to:"",
        title:"Information Security Policy Statement & Object"
    },
    {
        to:"",
        title:"Blog"
    },
    {
        to:"",
        title:"Reviews"
    },
    {
        to:"",
        title:"Near Me"
    },
    {
        to:"",
        title:"Careers"
    },
    {
        to:"",
        title:"Gift Card"
    },
    {
        to:"",
        title:"Contact Us"
    },
    {
        to:"",
        title:"Quick Links"
    },
]
let Footer_city_links=[
    {
        to:"",
        title:"Agra"
    },
    {
        to:"",
        title:"Ahmedabad"
    },
    {
        to:"",
        title:"Alwar"
    },
    {
        to:"",
        title:"Armitsar"
    },
    {
        to:"",
        title:"Aurangabad"
    },
    {
        to:"",
        title:"Banglore"
    },
    {
        to:"",
        title:"Bhopal"
    },
    {
        to:"",
        title:"Bhubaneswar"
    },
    {
        to:"",
        title:"Chandigarh Tricity"
    },
    {
        to:"",
        title:"Chennai"
    },
    {
        to:"",
        title:"Coimbatore"
    },
    {
        to:"",
        title:"Cuttack"
    },
    {
        to:"",
        title:"Dehradun"
    },
    {
        to:"",
        title:"Delhi NCR"
    },
    {
        to:"",
        title:"Guntur"
    },
    {
        to:"",
        title:"Guwahati"
    },
    {
        to:"",
        title:"Gwalior"
    },
    {
        to:"",
        title:"Hyderabad"
    },
    {
        to:"",
        title:"Indore"
    },
    {
        to:"",
        title:"Jabalpur"
    },
    {
        to:"",
        title:"Jaipur"
    },
    {
        to:"",
        title:"Jamshedupur"
    },
    {
        to:"",
        title:"Jodhpur"
    },
    {
        to:"",
        title:"Ahmedabad"
    },
    {
        to:"",
        title:"Alwar"
    },
    {
        to:"",
        title:"Armitsar"
    },
    {
        to:"",
        title:"Aurangabad"
    },
    {
        to:"",
        title:"Banglore"
    },
    {
        to:"",
        title:"Bhopal"
    },
    {
        to:"",
        title:"Bhubaneswar"
    },
    {
        to:"",
        title:"Chandigarh Tricity"
    },
    {
        to:"",
        title:"Chennai"
    },
    {
        to:"",
        title:"Coimbatore"
    },
    {
        to:"",
        title:"Cuttack"
    },
    {
        to:"",
        title:"Dehradun"
    },
    {
        to:"",
        title:"Delhi NCR"
    },
    {
        to:"",
        title:"Jodhpur"
    },
    {
        to:"",
        title:"Ahmedabad"
    },
    {
        to:"",
        title:"Alwar"
    },
    {
        to:"",
        title:"Armitsar"
    },
    {
        to:"",
        title:"Aurangabad"
    },
    {
        to:"",
        title:"Banglore"
    },
    {
        to:"",
        title:"Bhopal"
    },
    {
        to:"",
        title:"Bhubaneswar"
    },
    {
        to:"",
        title:"Chandigarh Tricity"
    },
    {
        to:"",
        title:"Chennai"
    },

]

function Footer() {
  return (
    <div style={{backgroundColor:"black"}}>
        <div className={homeStyle.footer_container}>
            <ul className={homeStyle.footer_list}>
                {
                    Footer_Links.map((el)=>(
                        <li>
                            <Link  to={el.to}>
                            {el.title}
                            </Link>
                        </li> 
                    ))
                }
            </ul>
        </div>
        <div className={homeStyle.footer_container_row2}>
            <Heading as='h4' size='sm' pb={4} pt={4}>Serving in </Heading>
            <ul>
                <li><Heading as='h6' size='xs'  pb={2} pt={2}>USA</Heading></li>
                <ul className={homeStyle.usa_city_container}>
                    <li>
                        <Link to="">Austin</Link>
                    </li>
                    <li>
                        <Link to="">Dollars</Link>
                    </li>
                    <li>
                    <Link to="">New York City</Link>
                    </li>
                </ul>
                <li>
                    <Heading as='h6' size='xs'  pb={2} pt={2}>IN</Heading>
                </li>
                <li>
                    <ul className={homeStyle.India_city_container}>
                        {
                            Footer_city_links.map((el)=>(
                                <li><Link to={el.to}>{el.title}</Link></li>
                            ))
                        }
                       
                    </ul>
                </li>

                <li><Heading as='h6' size='xs'  pb={2} pt={2}>UAE</Heading></li>
                <ul className={homeStyle.usa_city_container}>
                    <li>
                        <Link to="">Abu Dhabi</Link>
                    </li>
                    <li>
                        <Link to="">Dubai</Link>
                    </li>
                    <li>
                    <Link to="">Sharjah</Link>
                    </li>
                </ul>

                <li><Heading as='h6' size='xs'  pb={2} pt={2}>SGP</Heading></li>
                <ul className={homeStyle.usa_city_container}>
                    <li>
                        <Link to="">Singapore</Link>
                    </li>
                </ul>

                <li><Heading as='h6' size='xs'  pb={2} pt={2}>KSA</Heading></li>
                <ul className={homeStyle.usa_city_container}>
                    <li>
                        <Link to="">Jeddah</Link>
                    </li>
                    <li>
                        <Link to="">Riyadh</Link>
                    </li>
                    
                </ul>
            </ul>
        </div>
        
        <div  >
            <div className={homeStyle.footer_container_row3}>
                <Image src="/image/logo.png" alt='logImg' mt={"35px"} ml={{lg:"50px"}} width={132} height={39}/>
                <Text fontSize='sm' mt={"35px"}>2014-22 UrbanClap Technology India Pvt Ltd</Text>
                <div className={homeStyle.social_icons}>
                    <Link to=""><AiFillTwitterSquare size={"30px"}/></Link>
                    <Link to=""><AiFillFacebook size={"30px"}/></Link>
                    <Link to=""><AiFillInstagram size={"30px"}/></Link>
                    <Link to=""><FaPinterestSquare size={"30px"}/></Link>
                    <Link to=""><AiFillLinkedin size={"30px"}/></Link>
                </div>
                <div className={homeStyle.playStore} style={{display:"flex",
                backgroundColor:"red",position:"relative",bottom:"28px"}}>
                            <div w={"50%"}>
                                <Link href='https://chakra-ui.com'   isExternal>
                                    <Image 
                                    src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png" 
                                    alt='playStore'
                                    display="inline-block"
                                   
                                    />
                                </Link>
                            </div>
                            <div w={"50%"}>
                                <Link href='https://chakra-ui.com'  isExternal>
                                    <Image 
                                    src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png" 
                                    alt='playStore'
                                    display="inline-block"
                                    />
                                </Link>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer