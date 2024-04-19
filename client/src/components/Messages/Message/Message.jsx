import './Message.css'
import ReactEmoji from 'react-emoji'

export default function Message({ message: { user, text }, name }) {
    let isSentByCurrentuser = false

    const trimmedName = name.trim().toLowerCase()

    if (user === trimmedName) {
        isSentByCurrentuser = true
    }

    return (
        isSentByCurrentuser ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                    <p className="sentText pl-10">{user}</p>
                </div>
            </div>
        )
    )
}