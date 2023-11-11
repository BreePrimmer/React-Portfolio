import Project from '../components/Project'

const projectOne = {
    image: 'src/assets/cat-pattern.jpeg',
    caption: 'Cat Picker',
    projectLink: 'https://github.com/PsychoRSS/Cat-Picker',
    github: 'https://github.com/PsychoRSS/Cat-Picker'
}

const projectTwo = {
    image: 'src/assets/Purple-Planets.jpg',
    projectLink: 'https://breeprimmer.github.io/Space-Quiz/',
    caption: 'Space Quiz',
    github: 'https://github.com/BreePrimmer/Space-Quiz'
}

const projectThree = {
    image: 'src/assets/Homepage-DnD Character IMG.png',
    caption: 'Dnd Character Maker',
    projectLink: 'https://github.com/Achurale/DnD-Character-Maker',
    gitLink: 'https://github.com/Achurale/DnD-Character-Maker'
}

const projectFour = {
    image: 'src/assets/Homepage-DnD Character IMG.png',
    caption: 'Dnd Character Maker'
}

const projectFive = {
    image: 'src/assets/Homepage-DnD Character IMG.png',
    caption: 'Dnd Character Maker'
}

const projectSix = {
    image: 'src/assets/Homepage-DnD Character IMG.png',
    caption: 'Dnd Character Maker'
}

function Portfolio() {
    return (
        <div>
               <h1 className='p-title'>Portfolio</h1>
        <div className='portfolio-container'>
            <div className ='portfolio-column'>
                <Project
                image={projectOne.image}
                caption={projectOne.caption}
                github={projectOne.github}
                ></Project>
                <Project
                image={projectTwo.image}
                caption={projectTwo.caption}
                github={projectTwo.github}
                ></Project>
                <Project
                image={projectThree.image}
                caption={projectThree.caption}
                github={projectThree.github}
                ></Project>
            </div>
            <div className ='portfolio-column'>
                <Project
                image={projectFour.image}
                caption={projectFour.caption}
                ></Project>
                <Project
                image={projectFive.image}
                caption={projectFive.caption}
                ></Project>
                <Project
                image={projectSix.image}
                caption={projectSix.caption}
                ></Project>
            </div>
        </div>
        </div>
    )
}

export default Portfolio