import React from "react";
import Index from "../../../components/home/Index";


export default ({post})=>{
  return (
    <>
      <Index data={post}/>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`)
  const posts = await res.json() 

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }))
  return { paths, fallback: false }
}


export const getStaticProps = async ({ params }) => {  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/${params}`)
  const post = await res.json()  

  return {
    props: {
      post
    },
  }
}