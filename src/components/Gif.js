const Gif = ({src, handleImageClick}) => {
    return (
       <img src={src} alt='' width='100%' onClick={() => {handleImageClick(src)}}/>
    )
}

export default Gif
