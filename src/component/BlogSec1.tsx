import React from "react";
import { Link } from "react-router-dom";
import blogImg1 from "../assets/images/blog/blog-img1.jpg";
import blogImg2 from "../assets/images/blog/blog-img2.jpg";
import blogImg3 from "../assets/images/blog/blog-img3.jpg";
import blogImg4 from "../assets/images/blog/blog-img4.jpg";
import blogImg5 from "../assets/images/blog/blog-img5.jpg";
import blogImg6 from "../assets/images/blog/blog-img6.jpg";
import blogData from "../data/blogData.json";

/* ---------------- Image Map ---------------- */
const blogImages: Record<string, string> = {
    "blog-img1.jpg": blogImg1,
    "blog-img2.jpg": blogImg2,
    "blog-img3.jpg": blogImg3,
    "blog-img4.jpg": blogImg4,
    "blog-img5.jpg": blogImg5,
    "blog-img6.jpg": blogImg6,
};

/* ---------------- Types ---------------- */
interface BlogItem {
    id: number;
    image: keyof typeof blogImages;
    date: string;
    title: string;
    desc: string;
    link: string;
}

interface BlogSec1Props {
    limit?: number;
}

const BlogSec1: React.FC<BlogSec1Props> = ({ limit }) => {
    const displayedBlogs: BlogItem[] = limit
        ? blogData.slice(0, limit)
        : blogData;


    return (
        <div className="row home-blog-row blogPage-row2">
            {displayedBlogs.map((blog) => (
                <div
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                    key={blog.id}
                >
                    <Link to={blog.link} className="blog-box-main zoom_in">
                        <div className="blog-img-main">
                            <img
                                src={blogImages[blog.image]}
                                alt={blog.title}
                            />
                            <h3 className="blog-date">{blog.date}</h3>
                        </div>
                        <div className="blog-containe-main">
                            <h2>{blog.title}</h2>
                            <p>{blog.desc}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogSec1;
