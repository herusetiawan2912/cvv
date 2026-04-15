export interface BloggerPost {
  id: string;
  title: string;
  content: string;
  published: string;
  url: string;
  author: {
    displayName: string;
  };
}

export async function fetchBloggerPosts(): Promise<BloggerPost[]> {
  const blogId = import.meta.env.VITE_BLOGGER_BLOG_ID;

  if (!blogId) {
    console.warn("Blogger Blog ID is missing. Please check your environment variables.");
    return [];
  }

  try {
    // Using our local API proxy to avoid CORS issues
    const response = await fetch(`/api/blog-posts?blogId=${blogId}`);

    if (!response.ok) {
      throw new Error("Gagal mengambil artikel dari Blogger. Pastikan Blog ID benar dan blog bersifat publik.");
    }

    const data = await response.json();
    const entries = data.feed?.entry || [];

    return entries.map((entry: any) => {
      const alternateLink = entry.link?.find((l: any) => l.rel === "alternate");
      return {
        id: entry.id?.$t || Math.random().toString(),
        title: entry.title?.$t || "Untitled",
        content: entry.content?.$t || entry.summary?.$t || "",
        published: entry.published?.$t || new Date().toISOString(),
        url: alternateLink?.href || "#",
        author: {
          displayName: entry.author?.[0]?.name?.$t || "Admin",
        },
      };
    });
  } catch (error) {
    console.error("Error fetching Blogger posts:", error);
    return [];
  }
}
