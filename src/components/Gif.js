const Gif = ({src, handleImageClick, url}) => {
    return (
       <img src={src} alt='' width='100%' onClick={() => {handleImageClick(url)}}/>
    )
}

export default Gif
