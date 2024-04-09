import { FunctionComponent } from 'react';
import { BlogPostItemProps } from './BlogPost.types';

const BlogPostItem: FunctionComponent<BlogPostItemProps> = ({ imageUrl, title, category, link }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="blog blog-style--1">
        <div className="thumbnail">
          <a href={link}>
            <img
              className="w-100"
              src={imageUrl}
              alt={title}
            />
          </a>
        </div>
        <div className="content">
          <p className="blogtype">{category}</p>
          <h4 className="title">
            <a href={link}>{title}</a>
          </h4>
          <div className="blog-btn">
            <a className="rn-btn text-white" href={link}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostItem;
