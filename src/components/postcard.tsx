import { useState } from "react";

export function Postcard({ post }: { post: Post }) {
  const [likes, setLikes] = useState(0);

  return (
    <div
      className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-3
                    hover:border-gray-700 hover:bg-gray-900/80 transition"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-100">{post.title}</h2>
          <p className="text-sm text-gray-400">{post.user}</p>
        </div>
        <span className="text-xs text-gray-500">#{post.id}</span>
      </div>

      {/* Content */}
      <p className="text-gray-300 leading-relaxed">{post.content}</p>

      {/* Actions */}
      <button
        onClick={() => setLikes(likes + 1)}
        className="inline-flex items-center gap-2 text-sm text-gray-400
                   hover:text-red-400 transition"
      >
        ❤️ {likes}
      </button>
    </div>
  );
}
