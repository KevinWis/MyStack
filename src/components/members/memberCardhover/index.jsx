import {
  Card,
  Body,
  ProfileImage,
  Medias,
  Media,
  Footer,
  ImageFilter
} from "./style";

import { AiOutlineHeart,AiFillInstagram,AiFillYoutube, AiFillGithub } from 'react-icons/ai'
import { ImLinkedin }from 'react-icons/im'
import { FaRegComment } from 'react-icons/fa'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { useState } from 'react'

const MemberCardhover = () => {

  const [medias,setMedias] = useState([
    Math.floor((Math.random() + 1) * 10),
    Math.floor((Math.random() + 1) * 10)
  ])

  return (
    <>
      <Card>
        <Body>
            <ProfileImage>
              <ImageFilter>
                <div className='Dev_Name'>
                  <p>Dev's Name</p>
                </div>
              </ImageFilter>
            </ProfileImage>
            <Medias>

                <Media >
                  <AiFillGithub className='Media_Icon'size='2.8rem'/>
                </Media>

  
                <Media>
                  <ImLinkedin className='Media_Icon'size='2.4rem'/>
                </Media>

  
                <Media>
                  <AiFillInstagram className='Media_Icon'size='2.8rem'/>
                </Media>

                <Media>
                  <AiFillYoutube className='Media_Icon'size='2.8rem'/>
                </Media>
              </Medias>
        </Body>
        <Footer>
          <div className='Icon'>
            <AiOutlineHeart size='32px'/>
          </div>
            <p>{`${medias[0]}.${medias[1]}`} k</p>
          <div className='Spacer'></div>
          <div className='Icon'>
            <FaRegComment size='32px'/>
          </div>
          <p>{`${medias[0]}.${medias[1]}`} k</p>
          <div className='Spacer'></div>
          <div className='Icon'>
            <TiArrowForwardOutline size='32px'/>
          </div>
          <p>Profile</p>
        </Footer>
      </Card>
    </>
  );
};

export default MemberCardhover;
