"use client";

export default function BlogSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-6">
        {/* Date Skeleton */}
        <div className="flex items-center mb-3">
          <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="w-full h-5 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-5 bg-gray-200 rounded"></div>
        </div>

        {/* Excerpt Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Read More Skeleton */}
        <div className="flex items-center">
          <div className="w-20 h-4 bg-gray-200 rounded mr-2"></div>
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
