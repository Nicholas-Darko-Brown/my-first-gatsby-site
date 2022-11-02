export interface NodeProps {
  name: string;
}

export interface LayoutProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export interface MDXProps {
  id: string
  excerpt: string
  frontmatter: {
    author: string
    date: string
    title: string
    slug: string
  }
  parent: {
    id: string
    modifiedTime: string
    name: string
  }
}
