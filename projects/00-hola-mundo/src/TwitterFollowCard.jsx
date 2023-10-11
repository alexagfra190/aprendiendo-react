import { useState } from "react" //hooks para añadir funcionalidad a componentes

export function TwitterFollowCard({formatUserName,userName,children,initialIsFollowing}){
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)
    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' :  'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar' src={imageSrc} alt="El avatar de Kiko" />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUsername'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-goFollow">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
            </button>
            
        </aside>
    </article>
    )
}