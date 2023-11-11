function Project (props) {
    return (
        <div className='project-container'>
            
            <div className='project-div'>
                <div className='image-container'>
                    <a
                    className='caption'
                    href={props.projectLink}>
                    Deployed
                    </a>
                    <a
                    className='caption'
                    href={props.gitLink}>
                    Github
                    </a>

                    <img
                        className='project-img'
                        src={props.image}
                        alt='project image'>
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Project