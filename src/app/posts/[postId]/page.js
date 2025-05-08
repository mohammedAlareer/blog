import Link from "next/link";
import getFormattedDate from "../../../../lib/getFormattedDate";
import getPostsMeta, { getPostData, getPostsByName } from "../../../../lib/posts"
import { notFound } from "next/navigation";
import 'highlight.js/styles/dark.css'

export const revalidate = 10;
export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return []

  return posts.map((post) => ({
      postId: post.id
  }))
}

export async  function generateMetadata({params:{postId}}) {
  const post= await getPostsByName(`${postId}.mdx`);

  if(!post){ 
    return {
      title:"Post Not Found",
      
    }
  }
  return {
    title:post.meta.title
  }
}

export default async function Post({params:{postId}}) {
  const post= await getPostsByName(`${postId}.mdx`);

  if(!post) notFound()

  const {meta , content} = post;
  const pubDate = getFormattedDate(meta.date);
  const tags = meta.tags.map((tag,i) => (
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
  ))
  return (
    <>
    <div className="mx-auto max-w-2xl prose prose-invert">
      <h2 className="text-3xl mt-6 mb-0">{meta.title}</h2>
      <p className="text-sm mt-0">{meta.date}</p>
      <article className="mt-6">
        {content}
        </article> 
      <section>
        <h2>Related:</h2>
        <div className="flex gap-4">
          {tags}
        </div>
        </section> 
        <p>
          <Link href="/">Back to home</Link>
        </p>
    
        </div>
    </>
  )
}
