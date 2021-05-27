import Link from "next/link";
import Layout from "../../components/Layot";
import {getPostData,getAllPostIds} from '../../lib/post'


export default function Post({post}){
    if(!post){
        return <div>Loading ..</div>
    }


    return (
        <Layout title={post.title}>
            <p className="m-4">
            {"ID :"}
            {post.id}
            </p>
            <p className="mb-8 text-xl font-bold">{post.title}</p>
            <p className="px-10">{post.body}</p>
            <Link href="/blog-page">
                <div className="flex cursor-pointer mt-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
</svg>
<spna>back to blog-page</spna>
                </div>
            </Link>
        </Layout>
    );
}





export async function getStaticPaths(){
    const paths = await getAllPostIds();

    return {
        paths,
        fallback:false,
    };
}

export async function getStaticProps({params}){
    const {post:post} = await getPostData(params.id);
    return {
        props : {
            post,
        },
    };

}