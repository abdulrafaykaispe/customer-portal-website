"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogCard({ post }) {
  const router = useRouter();
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleClick = () => {
    router.push(`/resources/blogs/${post.slug}`);
  };

  // Clean up excerpt HTML
  const cleanExcerpt = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .replace(/\[&hellip;\]/g, "...")
    .trim();

  return (
    <div
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-gray-200"
      onClick={handleClick}
    >
      {/* Featured Image */}
      <div className="relative overflow-hidden h-48">
        {featuredImage ? (
          <>
            <img
              src={featuredImage.source_url}
              alt={featuredImage.alt_text || post.title.rendered}
              className="w-full h-full object-cover"
            />
            {/* Blur overlay bar */}
            <div className="absolute top-0 left-0 right-0 bg-white/20 backdrop-blur-sm border-b border-white/30 px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-white text-sm font-medium">
                  KAISPE LLC
                </span>
                <span className="text-white text-xs">Blog</span>
              </div>
            </div>
            {/* Date overlay */}
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded">
              <span className="text-white text-xs font-medium">
                {formattedDate}
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative">
            {/* Blur overlay bar for fallback */}
            <div className="absolute top-0 left-0 right-0 bg-white/20 backdrop-blur-sm border-b border-white/30 px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-white text-sm font-medium">
                  KAISPE LLC
                </span>
                <span className="text-white text-xs">Blog</span>
              </div>
            </div>
            {/* Date overlay for fallback */}
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded">
              <span className="text-white text-xs font-medium">
                {formattedDate}
              </span>
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {cleanExcerpt}
        </p>
        {/* Read More */}
        <div className="flex items-center -text-purply-blue font-medium text-sm transition-colors duration-200">
          <span>Read More</span>
          <ArrowRight
            size={16}
            className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
          />
        </div>
      </div>
    </div>
  );
}
