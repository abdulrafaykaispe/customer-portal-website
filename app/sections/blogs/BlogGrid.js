"use client";

import { useState, useEffect } from "react";
import BlogCard from "@/app/components/BlogCard";
import BlogPagination from "@/app/components/BlogPagination";
import BlogSkeleton from "@/app/components/BlogSkeleton";

export default function BlogGrid() {
  const postsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async (page) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `https://www.kaispe.com/wp-json/wp/v2/posts?categories=53&page=${page}&per_page=${postsPerPage}&_embed`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const fetchedPosts = await response.json();

      setPosts(fetchedPosts);

      const totalPagesHeader = parseInt(
        response.headers.get("X-WP-TotalPages") || "1",
        10
      );
      if (!totalPages) {
        setTotalPages(totalPagesHeader);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 375, behavior: "smooth" });
  };

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="text-red-500 text-xl mb-4">Failed to load blogs</div>
        <p className="text-gray-600">Please try again later</p>
      </div>
    );
  }

  return (
    <div className="lg:container-large md:container-medium sm:container-small mx-auto lg:margin-bottom-large sm:margin-bottom-small">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: postsPerPage }).map((_, index) => (
              <BlogSkeleton key={index} />
            ))
          : posts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>

      {totalPages > 1 && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isDisabled={isLoading}
        />
      )}
    </div>
  );
}
