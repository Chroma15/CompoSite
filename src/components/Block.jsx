import "./Block.css"

function Block(props){
    return (
        <div className="block">
            <img src={`../resurse-statice/images/${props.icon}`} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Block;