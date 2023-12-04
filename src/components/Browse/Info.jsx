import User from '../../assets/User.png'
import './info.css'

const Info = ()=>{
    const info = JSON.parse(window.localStorage.getItem("form"))
    const genre = JSON.parse(window.localStorage.getItem("type"))

    return (
        <div className='starts'>
        <div>
            <img src={User} style={{height:"48vh",width:"10vw",position:"relative",top:"20px",left:"10px"}}/>
        </div>

        <div className='userinfo'>
            <p style={{color:'white',fontSize:"36px"}}>{info.username}</p>
            <p style={{color:'white',fontSize:"30px"}}>{info.email}</p>
            <p style={{color:'white',fontSize:"46px"}}>{info.name}</p>
            <Chips categories={genre} color={"#9F94FF"}/>
        </div>
        </div>
    )
}

const Chips = ({color,categories})=>{
    return(
        <div style={{width:"20vw"}}>
       {categories.map((category)=>(
                <button className='card-btn'>{category}<span className='btn-span'></span></button>
        ))}
        </div>
    )
}

export default Info