import getPostsMeta from "../../../../lib/posts";
import ListItem from "@/app/components/ListItem";
import Link from "next/link";

export async function generateStaticParams(){
    const posts = await getPostsMeta();

    if(!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({tag}))
}

export async function generateMetadata({params:{tag}}){
    return {
        title:`Post about ${tag}`
    }
}

export default async function TagPostList({ params : {tag} }) {
  
    const posts = await getPostsMeta(); // جلب كل المقالات
  
    if (!posts) {
      return <p className="mt-10 text-center">Sorry, no posts available.</p>;
    }
  
    const tagPosts = posts.filter(post => post.tags.includes(tag));
  
    if (!tagPosts.length) {
      return (
        <div className="text-center">
          <p className="mt-10">Sorry, no posts for that keyword.</p>
          <Link href="/">Back to Home</Link>
        </div>
      );
    }
    return (
        <>
        <div className=" mx-auto max-w-2xl">
            <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
                <section className="mt-6">
                    <ul className="w-full list-none p-0">
                        {tagPosts.map(post => (
                            <ListItem key={post.id} post={post} />
                            ))}
                    </ul>
                </section>
                </div>
        </>
    )
}