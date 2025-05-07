import {compileMDX} from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import Video from '@/app/components/Video';
import CustomImage from '@/app/components/CustomImage';


export async function getPostsByName(fileName) {
  const res = await fetch(`https://raw.githubusercontent.com/gitdagray/test-blogposts/main/${fileName}`);

  if (!res.ok) return undefined;

  const rawMDX = await res.text()

  if(rawMDX === "404: Not Found") return undefined

  const {frontmatter, content} = await compileMDX({
    source:rawMDX,
    components:{
      Video,
      CustomImage,
    },
    options:{
      parseFrontmatter:true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      }
    }
  });
  const id = fileName.replace(/\.mdx$/, '');
  const blogPostObj = {
    meta:{
      id,
      title:frontmatter.title,
      date:frontmatter.date,
      tags:frontmatter.tags,
    },
    content
  }
  return blogPostObj;
}



export default async function getPostsMeta() {
  const res = await fetch("https://api.github.com/repos/gitdagray/test-blogposts/git/trees/main?recursive=1");
  

  if(!res.ok) return undefined

  const repoFiletree = await res.json();

  const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith(".mdx"))


  const posts = [];

  for(const file of filesArray){
    const post = await getPostsByName(file);
    if(post){
      const {meta} = post;
      posts.push(meta)
    }
  }

  return (posts)
    

}
