import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";
import * as fs from "fs";

// Step:1 Collect all the files from blogdata directory
// Step:2 Iterate through the and Display them
const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);

  // Using API Get Bloges Data
  // const [blogs, setblogs] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setblogs(parsed);
  //     });
  // }, []);

  return (
    <div className={styles.main}>
      {blogs.map((blogItem) => {
        return (
          <div className={styles.blogItem} key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3>
            </Link>
            <p>{blogItem.metadec.substr(0, 140)}....</p>
          </div>
        );
      })}
    </div>
  );
};

// Server Side rendering
// export async function getServerSideProps() {
//   const data = await fetch("http://localhost:3000/api/blogs");
//   const blogs = await data.json();
//   return {
//     props: { blogs },
//   };
// }

// Static Side Rendering
export async function getStaticProps() {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs },
  };
}
export default Blog;
