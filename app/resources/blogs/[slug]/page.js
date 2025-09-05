import MobileHeader from "@/app/sections/MobileHeader";
import Header from "@/app/sections/Header";
import BlogPost from "@/app/sections/blogs/BlogPost";
import FooterCTA from "@/app/sections/FooterCTA";
import Footer from "@/app/sections/Footer";

import { getContentFromFirestore } from "@/app/services/apiData";

export async function generateMetadata({ params }) {
  const siteUrl = "https://www.kaispe.com";
  const { slug } = await params;

  const response = await fetch(
    `https://www.kaispe.com/wp-json/wp/v2/posts?categories=53&slug=${slug}&_embed`
  );
  const posts = await response.json();
  const post = posts[0];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];

  return {
    title: post.title.rendered,
    description: post.excerpt?.rendered || "Blog post from Kaispe",
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt?.rendered || "Blog post from Kaispe",
      url: `${siteUrl}/resources/blogs/${slug}`,
      type: "article",
      images: featuredImage
        ? [
            {
              url: featuredImage.source_url,
              alt: featuredImage.alt_text || post.title.rendered,
            },
          ]
        : [],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: post.excerpt?.rendered || "Blog post from Kaispe",
      images: featuredImage ? [featuredImage.source_url] : [],
    },
    alternates: {
      canonical: `${siteUrl}/resources/blogs/${slug}`,
    },
  };
}

export default async function BlogDetail() {
  const content = await getContentFromFirestore();

  return (
    <>
      <Header />
      <MobileHeader />
      <BlogPost />
      <FooterCTA content={content} />
      <Footer content={content} />
    </>
  );
}
