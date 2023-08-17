import { client } from '@/libs/client';
import styles from '@/styles/Home.module.scss'
import Link from 'next/link';

//SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "blog" });
  // console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home( blog ) {
  return (
    <div className={styles.contaier}>
      <h1>大帝のお部屋</h1>
      <p>投稿一覧↓</p>
      {blog.blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`} legacyBehavior>
            <a href="">{blog.title}</a>
            </Link>
        </li>
      ))}
    </div>
  );
}
