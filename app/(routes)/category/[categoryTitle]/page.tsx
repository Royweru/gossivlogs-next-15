import { client } from "@/lib/sanity";
import CategoryDetailsClient from "./category-details-client";
import { Suspense } from "react";

// // Add this function to generate all possible category paths at build time
// export async function generateStaticParams() {
//   // Query to fetch all unique category titles from Sanity
//   const CATEGORIES_QUERY = `*[_type == "category"]{
//     title
//   }`;
  
//   const categories = await client.fetch(CATEGORIES_QUERY);
  
//   // Return an array of objects with categoryTitle parameter
//   return categories.map((category: { title: any; }) => ({
//     categoryTitle: category.title,
//   }));
// }

const options = { next: { revalidate: 30 } };
const CategoryDetailsPage = async ({
  params,
}: {
  params: Promise<{ categoryTitle: string }>;
}) => {
  const POSTS_QUERY = `*[_type =="post" && category->title == $categoryTitle]{
                      title,
                      publishedAt,
                      "currentSlug":slug.current,
                      mainImage,
                      excerpt,
                      "estimatedReadingTime":round(length(pt::text(body))/5/180),
                      category->{title},
                       author->{name, twitter, bio, image, email},
   }`;
  const posts = await client.fetch(POSTS_QUERY, await params, options);
  

  return (
    <Suspense fallback={<div> Loading....</div>}>
       <div className="min-h-screen  md:py-8 py-6 ">
      <CategoryDetailsClient posts={posts} />
    </div>
    </Suspense>
   
  );
};

export default CategoryDetailsPage;