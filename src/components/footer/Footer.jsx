import React from 'react'
import { Divider, FooterContainer, FooterIcons, FooterList, FooterText, Guide, Icon } from './styles'
import { FaFacebook } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {

  return (
    <FooterContainer>
      <FooterList>
        <FooterText>Follow Star Wars</FooterText>
        <FooterIcons>
          <Icon>
            <FaFacebook/>
          </Icon>
          <Icon>
            <AiOutlineInstagram/>
          </Icon>
          <Icon>
            <AiFillYoutube/>
          </Icon>
          <Divider/>
          <Guide>
            <p>KIDS</p>
          </Guide>
        </FooterIcons>
        <FooterText>TM & &copy; Lucasfilm Ltd. All Rights Reserved</FooterText>
      </FooterList>
    </FooterContainer>
  )
}

export default Footer