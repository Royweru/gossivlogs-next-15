import React, { Suspense } from 'react'
import VideoSlugPageClient from './video-slug-page-client'
import { client } from '@/lib/sanity';

// Add this function to generate all possible video slug paths at build time
// export async function generateStaticParams() {
//   // Query to fetch all unique video slugs from Sanity
//   const VIDEOS_QUERY = `*[_type == "videoBlogPost"]{
//     "videoSlug": slug.current
//   }`;
  
//   const videos = await client.fetch(VIDEOS_QUERY);
  
//   // Return an array of objects with videoSlug parameter
//   return videos.map((video: { videoSlug: any; }) => ({
//     videoSlug: video.videoSlug,
//   }));
// }

const POST_QUERY = `*[_type == "videoBlogPost" && slug.current == $videoSlug][0]{
  title,
  body,
  publishedAt,
  slug,
  mainImage,
  category->{title},
}`;

const options = {next:{revalidate:30}}

const VideoSlugPage = async({params}:{
  params:Promise<{videoSlug:string}>
}) => {
  const post = await client.fetch(POST_QUERY, await params, options)
  
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <VideoSlugPageClient post={post} />
    </Suspense>
  )
}

export default VideoSlugPage