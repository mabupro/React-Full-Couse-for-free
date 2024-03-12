
function ProfilePicture() {

    const imageUrl = './src/assets/profile.jpg'

    const handleClick = (e) => {
        console.log("OUCH!")
        e.target.style.display = "none"
    }

    return (
        <img className="profile-image" onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
    )
}
export default ProfilePicture