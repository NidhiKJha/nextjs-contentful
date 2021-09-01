import { createClient } from "contentful";

export async function getStaticProps(){
  const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({
    content_type : "blog"
  })

  return{
    props:{
      blogs: res.items
    }
  }
}

export default function Home(props) {
  console.log(props)
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="title" style={{ fontSize: "60px", color: "black" }}>
        Title
      </h1>
      {props.blogs.map((blog) => (
        <h2 style={{ fontSize: "35px", color: "blueviolet" }} key={blog.sys.id}>
        {blog.fields.blogTitle}
      </h2>
      ))}

    </div>
  );
}
