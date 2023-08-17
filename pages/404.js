import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
        <main>
            <h2>404 - ページが見つかりません</h2>
            <Link href={'/'}>ホームに戻る</Link>
            {/* <Image src="https://images.microcms-assets.io/assets/f33c585606984f2b82f5bd40f9e397e1/a9371a6b45ca49249dee010cab9c58a9/buranko_boy_smile.png" width={400} height={300} alt="branco"/> */}
        </main>
    );
  }