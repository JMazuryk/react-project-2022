
function User({item,UserButton}) {
    return (
        <div>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
            <button onClick ={()=>UserButton(item)}>User details</button>
        </div>
    );
}

export {User};