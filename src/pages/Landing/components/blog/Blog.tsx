import { FunctionComponent } from 'react';
import { BlogProps } from './Blog.types';
import BlogPostItem from './BlogPost';

const BlogSection: FunctionComponent<BlogProps> = ({
  title = 'Latest Blogs',
  subtitle = 'Some of the latest blog posts I have cooked up ;)',
  blogs,
}) => {
  return (
    <div id="blog" className="fix">
      <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row mt--60 mt_sm--40">
            {blogs.map(({ imageUrl, title, link, category }) => (
                <BlogPostItem key={title} imageUrl={imageUrl} title={title} link={link} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
