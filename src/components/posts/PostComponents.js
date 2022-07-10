export default function ({item}) {
    return (
        <div>
            <h6>{item.id}</h6>
            <p>{item.body}</p>
            <p>{item.title}</p>
        </div>
    );
}