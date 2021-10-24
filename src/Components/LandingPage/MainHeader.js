function MainHeader({ text, slogan }){
    return (
        <div>
            <h1 className = 'main-header text-center'>{text}</h1>
            <h2 className = 'secondary-text text-center'>{slogan}</h2>
        </div>
    )
}

export default MainHeader
