import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";

// Step:1 Collect all the files from blogdata directory
// Step:2 Iterate through the and Display them
const Blog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setblogs(parsed);
      });
  }, []);

  return (
    <div className={styles.main}>
      {blogs.map((blogItem) => {
        return (
          <div className={styles.blogItem} key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3>
            </Link>
            <p>{blogItem.content.substr(0, 140)}....</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
