export default function User({item,clickPosts}) {
    const onclick = () => {
        clickPosts (item.id);
    }
    return (
        <div>
            {item.name}
            <button onClick={onclick}>show posts</button>
        </div>
    );
}
