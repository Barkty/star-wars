import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { ButtonFilled, ButtonOutlined, ReviewCard } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import play from 'assets/play.png'

const Reviews = () => {

  return (
    <ReviewCard>
        <p className='title'>Reviews</p>
        <div className='video_frame'>
            <div className='video'>
                <div className='rating'>
                    <AiFillStar/>
                    <p className='rating_number'>7.9</p>
                </div>
                <div className='controls'>
                    <div className='icon'>
                        <FiChevronLeft/>
                    </div>
                    <div className='video_icon'>
                        <img alt='Play video' src={play}/>
                    </div>
                    <div className='icon'>
                        <FiChevronRight/>
                    </div>
                </div>
                <div className='action_container'>
                    <div className='actions'>
                        <ButtonFilled>stream now</ButtonFilled>
                        <ButtonOutlined>explore</ButtonOutlined>
                    </div>
                </div>
            </div>
        </div>
        <p className='movie_title'>STAR WARS: THE PHANTOM MENACE</p>
        <p className='movie_info'>After a millennia, an ancient evil returns seeking revenge. Meanwhile, Jedi Knight Qui-Gon Jinn discovers Anakin Skywalker:</p>
    </ReviewCard>
  )
}

export default Reviews