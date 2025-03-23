import React, { Suspense } from "react";
import AudioPageIdClient from "./audio-page-id-client";
import { client } from "@/lib/sanity";

// Add this function to generate all possible audio slug paths at build time
// export async function generateStaticParams() {
//   // Query to fetch all unique audio blog post slugs from Sanity
//   const AUDIO_POSTS_QUERY = `*[_type == "audioBlogPost"]{
//     "audioSlug": slug.current
//   }`;
  
//   const audioPosts = await client.fetch(AUDIO_POSTS_QUERY);
  
//   // Return an array of objects with audioSlug parameter
//   return audioPosts.map((post: { audioSlug: any; }) => ({
//     audioSlug: post.audioSlug,
//   }));
// }

const POST_QUERY = `*[_type == "audioBlogPost" && slug.current == $audioSlug][0]{
  title,
  body,
   publishedAt,
   slug,
   mainImage,
  audio{
          asset->{
          _id,
          url
        },
     category->{title},
     author->{
      name
     }
 
}`;
const options = { next: { revalidate: 30 } };
const AudioIdPage = async ({
  params,
}: {
  params: Promise<{ audioSlug: string }>;
}) => {
  const post = await client.fetch(POST_QUERY, await params, options);

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <AudioPageIdClient audioBlog={post} />
    </Suspense>
  );
};

export default AudioIdPage;