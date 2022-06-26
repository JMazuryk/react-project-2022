export default function Post(props) {
    let {item,color,Chosen} = props;
    return (
        <div style={{color: color, background:'silver',marginBottom:'3px'}}>{item.id} {item.title}

        <button onClick={()=>{
            Chosen(item);
        } }>details</button>
        </div>
    );
}