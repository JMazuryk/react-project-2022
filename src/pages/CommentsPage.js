import CommentsComponents from "../components/comments/CommentsComponents";
import {Outlet} from "react-router-dom";

export default function CommentsPage() {
    return (
        <div>
            <Outlet/>
            <CommentsComponents/>
        </div>
    );
}