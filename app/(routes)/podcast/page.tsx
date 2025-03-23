import { client } from "@/lib/sanity";
import PodcastsClient from "./podcast-client";
import { Suspense } from "react";

const POSTS_QUERY = `*[
  _type == "audioBlogPost"]|order(publishedAt desc){
  _id, 
  title, 
  "currentSlug":slug.current,
  audio,
  thumbnail,
  category->{title},
  author->{name, twitter, bio, image, email},
  excerpt
  }`;
  const options = {next:{revalidate:30}}


const PodcastPage =async () => {
  const podcasts = await client.fetch(POSTS_QUERY,{},options)
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <PodcastsClient podcastsData={podcasts} />
    </Suspense>
 
  );
};

export default PodcastPage;