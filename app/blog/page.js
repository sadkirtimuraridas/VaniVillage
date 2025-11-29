import Link from "next/link";

// ✅ Replace with your real YouTube video IDs
const videos = [
  {
    id: 1,
    title: "Vani Village Update 23.03.25 Doors",
    videoId: "Pt-Vxxmc49w",
    date: "October 21, 2025",
    author: "Lenka Horinkova",
    excerpt:
      "Vaikuntha Gardens Update: September 19, 2024",
    slug: "vani-village-update-23-03-25-doors",
  },
  {
    id: 2,
    title: "Vani Village Update 13.01.25 more books",
    videoId: "ATHNooL_jZA",
    date: "September 19, 2024",
    author: "Vani Village Team",
    excerpt:
      "Vaikuntha Gardens Update: September 19, 2024",
    slug: "vaikuntha-gardens-update",
  },
  {
    id: 3,
    title: "Vani Village Update 13.01.25",
    videoId: "ittp9VaS-uw",
    date: "August 10, 2024",
    author: "Vanipedia Service Team",
    excerpt:
      "Vaikuntha Gardens Update: September 19, 2024",
    slug: "temple-construction-progress",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-10 px-4 text-center">
          <br />
          <br />
          <h1 className="text-4xl font-bold text-gray-900">Construction Updates</h1>
          <p className="mt-3 text-lg text-gray-600">
            Latest updates from Vani Village & Vaikuntha Gardens
          </p>
        </div>
      </header>

      {/* BLOG GRID */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {videos.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
              >
                {/* ✅ VIDEO FRAME (FIXED HEIGHT) */}
                <div className="w-full h-[220px] bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${post.videoId}`}
                    title={post.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xl font-semibold text-gray-900 hover:text-indigo-600"
                  >
                    {post.title}
                  </Link>

                  <p className="mt-1 text-sm text-gray-500">
                    {post.date} • {post.author}
                  </p>

                  <p className="mt-3 text-gray-700">{post.excerpt}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Vani Village — All rights reserved.
      </footer>
    </div>
  );
}
