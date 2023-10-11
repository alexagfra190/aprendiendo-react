import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    const formatUserName = (userName)=> `@${userName}`

    const users =[
        {
            userName:'midudev',
            name:'Miguel Angel',
            isFollowing:true
        },
        {
            userName:'pheralb',
            name:'Pablo H',
            isFollowing:false
        },
        {
            userName:'PacoHdezs',
            name:'Paco hdez',
            isFollowing:true
        },
        {
            userName:'TMChein',
            name:'Tomas',
            isFollowing:false
        }
    ]
    return (
        <section className='App'>
           {
            users.map(({userName,name,isFollowing}) =>(
                
                    <TwitterFollowCard
                        key={userName}
                        initialIsFollowing={isFollowing}
                        formatUserName={formatUserName} 
                        userName={userName}>
                       {name}
                    </TwitterFollowCard>
            
            ))
           }
            
        </section>
    )
}