import './share.css'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                {/* i have say i am pissed while writing this code ,if ever somebody reads this */}
                <img src="/assets/person/monkey.jpg" alt="*" className="shareProfileImg" />
                <input
                   placeholder="What's on Your Mind?"
                   className="shareInput"
                />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">

            </div>
        </div>
    </div>
  )
}
