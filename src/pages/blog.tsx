import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'The Evolution of Streetwear: From Subculture to High Fashion',
    excerpt: 'Explore how streetwear has transformed from underground movement to mainstream fashion...',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-15',
    author: 'Sarah Johnson'
  },
  {
    id: 2,
    title: 'Sustainable Fashion: Making Better Choices',
    excerpt: 'Learn about sustainable materials and ethical manufacturing in the fashion industry...',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
    author: 'Michael Chen'
  },
  // Add more blog posts
];

export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                {post.date} • By {post.author}
              </div>
              <h2 className="text-xl font-semibold mb-2">
                <Link to={`/blog/${post.id}`} className="hover:text-gray-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-gray-900 font-medium hover:text-gray-600"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}