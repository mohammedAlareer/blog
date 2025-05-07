import getFormattedDate from "../../../lib/getFormattedDate";
import Link from "next/link";
export default function ListItem({post}) {
    const {id , title , date} = post;
    const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
        <Link className="underline hover:underline-offset-2 hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>
        {title}
        </Link>
        <br/>
         <div className="text-sm mt-1">{formattedDate}</div>
    </li>
  )
}
