import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material'
import './share.css'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                {/* i have say i am pissed while writing this code ,if ever somebody reads this */}
                <img src="/assests/person/monkey.jpg" alt="*" className="shareProfileImg" />
                <input
                   placeholder="What's on Your Mind?"
                   className="shareInput"
                />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className='shareIcon'/>
                        <span className="shareOptionText">
                            Photo Or Video
                        </span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className='shareIcon'/>
                        <span className="shareOptionText">
                              Tag
                        </span>
                    </div>
                    <div className="shareOption">
                        <Room  htmlColor="green" className='shareIcon'/>
                        <span className="shareOptionText">
                            Location
                        </span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className='shareIcon'/>
                        <span className="shareOptionText">
                           Feeling
                        </span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
