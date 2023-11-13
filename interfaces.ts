
export interface Post {
    slug: string,
    title: string,
    image: string,
    excerpt: string,
    date: string,
    isFeatured: boolean,
}

export interface BlogPosts {
    posts: Post[]
}

export interface SinglePost extends Post {
    content: any
}

export interface Project {
    slug: string,
    title: string,
    image: string,
    link: string,
    technologies: string,
    description: string
}

export interface Projects {
    projects: Project[]
}

export interface HamburgerProps {
    isOpen: boolean;
    toggle: () => void;
}