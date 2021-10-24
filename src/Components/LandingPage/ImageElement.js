function ImageElement({ image_path }){
    return (
        <div className = 'text-center mt-3'>
            <img alt = 'robot' className = 'main-image' src = {image_path}></img>
        </div>
    )
}

export default ImageElement
