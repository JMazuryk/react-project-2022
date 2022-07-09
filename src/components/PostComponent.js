import {useNavigate} from 'react-router-dom';


export default function PostComponent({post}) {

    let navigate = useNavigate();

    return (
        <div>
            {post.title}-
            <button onClick={() => {
                navigate(post.id.toString());
            }}>details
            </button>
        </div>
    );
}