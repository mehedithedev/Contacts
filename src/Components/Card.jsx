import Avatar from "./Avatar"
import Info from "./Info"

const Card= (props)=>{
    return(
        
        <div>
        
        <div className="card">
            <div className="top">
                
                <h2 className="name">{props.name}</h2>
                
                <Avatar img={props.img}/>
                
            </div>
            <div className="bottom">
                <Info
                detailInfo={props.email}
                />
                <Info
                detailInfo={props.phone}
                />
            </div>
        </div>

        </div>

    )
}
export default Card