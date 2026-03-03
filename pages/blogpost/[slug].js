import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import blogPost from "../../styles/blogpost.module.css";
import * as fs from "fs";

// Step:1 find the file corresponding to the slug
// Step:2 Populate them inside the page

const Slug = (props) => {
  function createMarkup(description) {
    return { __html: description };
  }

  const [blog, setBlog] = useState(props.blog);

  // Using API Get Blog Data
  // const [blog, setBlog] = useState();
  // const router = useRouter();
  // useEffect(() => {
  //   if(!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <>
      <div className={blogPost.main}>
        <h1>{blog && blog.title}</h1>
        {blog && (
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        )}
      </div>
    </>
  );
};

// Static Side Rendering
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myfile = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: {
      blog: JSON.parse(myfile),
    },
  };
}

export async function getStaticPaths() {
  let data = await fs.promises.readdir("blogdata");
  let paths = data.map((filename) => {
    return {
      params: {
        slug: filename.replace(".json", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

// Server Side Rendering
// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   const res = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
//   const data = await res.json();
//   return {
//     props: {
//       blog: data,
//     },
//   };
// }

export default Slug;
