import { client } from "@/libs/client";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.scss"
import Link from "next/link";

//SSG
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

return {
    props: {
        blog: data,
    },
};
};

export const getStaticPaths = async() => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

export default function BlogId({ blog }) {
    const router = useRouter();
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.publishedAt}>{blog.publishedAt}</p>
            <div
                dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
                className={styles.post}
            ></div>
            {/* <Link href="#" legacyBehavior>
                <a onClick={() => { router.back() }}>
                    戻る
                </a>
            </Link> */}
            <button onClick={() => router.back()}>戻る</button>
        </main>
    );
}