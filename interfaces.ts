export interface Post {
    slug: string,
    title: string,
    image: string,
    excerpt: string,
    date: string,
}

export interface BlogPosts {
    posts: Post[]
}

export interface SinglePost extends Post {
    content: any
}
