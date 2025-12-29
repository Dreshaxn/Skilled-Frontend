"use client";

import Link from "next/link";
import { useState } from "react";
import { Postcard } from "@/components/postcard";

const posts = [
  {
    user: "Sarah Chen",
    id: 1,
    title: "Finally cracked the Two Sum problem",
    content:
      "After struggling with hash maps for weeks, I finally understood why we use them for O(n) lookups. The key insight was realizing we can check for complements as we iterate.",
    likes: 24,
    avatar: "SC",
    timeAgo: "2h",
    problemsSolved: 156,
  },
  {
    user: "Jackson Wright",
    id: 2,
    title: "Tips for Dynamic Programming",
    content:
      "I've been practicing DP problems daily for 3 months. My approach: start with the recursive solution, then memoize, then convert to tabulation. Works every time.",
    likes: 47,
    avatar: "JW",
    timeAgo: "5h",
    problemsSolved: 312,
  },
  {
    user: "Maria Rodriguez",
    id: 3,
    title: "Graph algorithms are beautiful",
    content:
      "Just implemented Dijkstra's algorithm from scratch. Understanding BFS and DFS first made it so much easier. The way these algorithms traverse and find optimal paths is elegant.",
    likes: 31,
    avatar: "MR",
    timeAgo: "8h",
    problemsSolved: 203,
  },
];

const leaderboard = [
  { rank: 1, name: "Alex Kim", score: 2450, change: "up" },
  { rank: 2, name: "Priya Patel", score: 2380, change: "up" },
  { rank: 3, name: "Jordan Lee", score: 2295, change: "down" },
  { rank: 4, name: "Sam Rivera", score: 2210, change: "same" },
  { rank: 5, name: "Taylor Chen", score: 2145, change: "up" },
];

const trendingTags = [
  { name: "arrays", count: 1240 },
  { name: "dynamic-programming", count: 890 },
  { name: "graphs", count: 756 },
  { name: "trees", count: 623 },
  { name: "strings", count: 512 },
];

export default function Home() {
  const [postContent, setPostContent] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Profile */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-4">
              {/* Profile Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
                {/* Banner */}
                <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600" />

                {/* Avatar */}
                <div className="px-4 -mt-10">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-gray-800 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">DY</span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-4 pt-3">
                  <h2 className="text-xl font-bold text-white">
                    Dreshawn Young
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    CS Student at Stanford
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Passionate about algorithms and competitive programming
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-700/50">
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">127</p>
                      <p className="text-xs text-gray-500">Solved</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">1,250</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">15</p>
                      <p className="text-xs text-gray-500">Streak</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Quick Access
                </h3>
                <nav className="space-y-1">
                  <Link
                    href="/problems"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all group"
                  >
                    <svg
                      className="w-5 h-5 text-blue-400 group-hover:text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span>Practice Problems</span>
                  </Link>
                  <Link
                    href="/contests"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all group"
                  >
                    <svg
                      className="w-5 h-5 text-purple-400 group-hover:text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Contests</span>
                  </Link>
                  <Link
                    href="/submissions"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all group"
                  >
                    <svg
                      className="w-5 h-5 text-green-400 group-hover:text-green-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>My Submissions</span>
                  </Link>
                  <Link
                    href="/bookmarks"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all group"
                  >
                    <svg
                      className="w-5 h-5 text-amber-400 group-hover:text-amber-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    <span>Saved Problems</span>
                  </Link>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Feed */}
          <main className="lg:col-span-6 space-y-4">
            {/* Create Post */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">ED</span>
                </div>
                <div className="flex-1">
                  <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Share your coding journey..."
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700/50 transition-all">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-gray-700/50 transition-all">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 hover:border-gray-600/50 transition-all"
                >
                  {/* Post Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/80 to-purple-500/80 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">
                        {post.avatar}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white truncate">
                          {post.user}
                        </h3>
                        <span className="text-xs text-gray-500 flex-shrink-0">
                          {post.problemsSolved} problems solved
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {post.timeAgo} ago
                      </p>
                    </div>
                    <button className="p-2 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-gray-700/50 transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {post.content}
                    </p>
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center gap-1 mt-5 pt-4 border-t border-gray-700/50">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 hover:text-red-400 hover:bg-gray-700/50 transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700/50 transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span className="text-sm">Comment</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 hover:text-green-400 hover:bg-gray-700/50 transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <span className="text-sm">Share</span>
                    </button>
                    <button className="ml-auto p-2 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-gray-700/50 transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-4">
              {/* Leaderboard */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white">Top Coders</h3>
                  <Link
                    href="/leaderboard"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View all
                  </Link>
                </div>
                <div className="space-y-3">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-700/30 transition-all cursor-pointer"
                    >
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                          user.rank === 1
                            ? "bg-amber-500/20 text-amber-400"
                            : user.rank === 2
                            ? "bg-gray-400/20 text-gray-300"
                            : user.rank === 3
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-gray-700/50 text-gray-400"
                        }`}
                      >
                        {user.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user.score} points
                        </p>
                      </div>
                      {user.change === "up" && (
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      )}
                      {user.change === "down" && (
                        <svg
                          className="w-4 h-4 text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4">
                <h3 className="font-semibold text-white mb-4">
                  Trending Topics
                </h3>
                <div className="space-y-2">
                  {trendingTags.map((tag) => (
                    <Link
                      key={tag.name}
                      href={`/problems?tag=${tag.name}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-700/30 transition-all group"
                    >
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        #{tag.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {tag.count} posts
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Daily Challenge */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <h3 className="font-semibold text-white">Daily Challenge</h3>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Solve today's challenge to maintain your streak
                </p>
                <Link
                  href="/problems/daily"
                  className="block w-full py-2.5 text-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Start Challenge
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
