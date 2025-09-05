"use client";

import { useState, useEffect } from "react";
import { Calendar, User, Tag } from "lucide-react";
import { useParams } from "next/navigation";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import MainLinkButton from "@/app/components/MainLinkButton";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  const fetchBlogPost = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `https://www.kaispe.com/wp-json/wp/v2/posts?categories=53&slug=${slug}&_embed`
      );

      console.log("response", response);

      if (!response.ok) {
        throw new Error("Failed to fetch blog post");
      }

      const posts = await response.json();
      if (posts.length === 0) {
        throw new Error("Post not found");
      }

      setPost(posts[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAdjacentPosts = async (date) => {
    try {
      const prevRes = await fetch(
        `https://www.kaispe.com/wp-json/wp/v2/posts?categories=53&before=${encodeURIComponent(
          date
        )}&per_page=1&orderby=date&order=desc&_fields=slug,title`
      );
      const prevData = await prevRes.json();
      setPrevPost(prevData[0] || null);

      const nextRes = await fetch(
        `https://www.kaispe.com/wp-json/wp/v2/posts?categories=53&after=${encodeURIComponent(
          date
        )}&per_page=1&orderby=date&order=asc&_fields=slug,title`
      );
      const nextData = await nextRes.json();
      setNextPost(nextData[0] || null);
    } catch (error) {
      console.error("Error fetching adjacent posts:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  useEffect(() => {
    if (post) {
      fetchAdjacentPosts(post.date);
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small lg:mt-12 sm:mt-8">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-lg font-medium mb-4">
            Blog post not found
          </div>
          <MainLinkButton
            href="/resources/blogs"
            text="Return to blogs"
            className="px-8"
          />
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const author = post._embedded?.author?.[0];
  const categories =
    post._embedded?.["wp:term"]?.[0]?.filter(
      (term) => term.taxonomy === "category"
    ) || [];
  const tags =
    post._embedded?.["wp:term"]?.[1]?.filter(
      (term) => term.taxonomy === "post_tag"
    ) || [];

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sharingUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(post.title.rendered)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      window.location.href
    )}&title=${encodeURIComponent(post.title.rendered)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      post.title.rendered + " " + window.location.href
    )}`,
  };

  return (
    <div className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small">
      <MainLinkButton
        href="/resources/blogs"
        text="Back to blogs"
        className="my-10 px-8"
      />

      <article className="">
        {featuredImage && (
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img
              src={featuredImage.source_url}
              alt={featuredImage.alt_text || post.title.rendered}
              className="w-full h-full object-cover"
              data-og-image="true"
              data-image-url={featuredImage.source_url}
            />
          </div>
        )}

        <div className="py-6 md:py-8">
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-6 gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {formattedDate}
              </div>

              {author && (
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {author.name}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={sharingUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#F7F8FD] flex items-center justify-center p-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                aria-label="Share on Facebook"
                onClick={isLoading ? (e) => e.preventDefault() : undefined}
              >
                <FaFacebookF size={20} style={{ fill: "#6A7C92" }} />
              </a>
              <a
                href={sharingUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#F7F8FD] flex items-center justify-center p-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                aria-label="Share on X"
                onClick={isLoading ? (e) => e.preventDefault() : undefined}
              >
                <FaXTwitter size={20} style={{ fill: "#6A7C92" }} />
              </a>
              <a
                href={sharingUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#F7F8FD] flex items-center justify-center p-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                aria-label="Share on LinkedIn"
                onClick={isLoading ? (e) => e.preventDefault() : undefined}
              >
                <FaLinkedinIn size={20} style={{ fill: "#6A7C92" }} />
              </a>
              <a
                href={sharingUrls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#F7F8FD] flex items-center justify-center p-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                aria-label="Share on WhatsApp"
                onClick={isLoading ? (e) => e.preventDefault() : undefined}
              >
                <FaWhatsapp size={20} style={{ fill: "#6A7C92" }} />
              </a>
            </div>
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold -text-jungle-green mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-4 py-1 -bg-purply-blue rounded-full text-sm font-medium"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8 space-y-5 blogs-class"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {tags.length > 0 && (
            <div className="border-t pt-6">
              <div className="flex items-center mb-3">
                <Tag size={16} className="mr-2 text-gray-500" />
                <span className="text-sm font-medium text-gray-500">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <div className="flex justify-between mt-10">
        {prevPost ? (
          <div className="relative group">
            <MainLinkButton
              href={`/resources/blogs/${prevPost.slug}`}
              text="Previous Blog"
              className="px-8"
            />
            <span className="absolute left-0 bottom-full mb-2 w-max max-w-xs px-3 py-2 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {prevPost.title?.rendered}
            </span>
          </div>
        ) : (
          <div />
        )}

        {nextPost ? (
          <div className="relative group">
            <MainLinkButton
              href={`/resources/blogs/${nextPost.slug}`}
              text="Next Blog"
              className="px-8"
            />
            <span className="absolute right-0 bottom-full mb-2 w-max max-w-xs px-3 py-2 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {nextPost.title?.rendered}
            </span>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
