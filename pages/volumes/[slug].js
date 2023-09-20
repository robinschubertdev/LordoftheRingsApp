import { useRouter } from "next/router";
import { volumes } from "../../data";
import Link from "next/link";
import Image from "next/image";

export default function Volume() {
    const router = useRouter();
    const { slug } = router.query;
    console.log(router);
 


const singleVolume=volumes.find((volume) => volume.slug === slug)

if (!singleVolume) {
    return
}
const books = singleVolume.books;
const cover = singleVolume.cover;

return (
    <main>

        <h1>{singleVolume.title}</h1>

        <Link href="/overview">Overview</Link>
        
        <p>{singleVolume.description}</p>

        <Image 
        src={cover}
        alt={`Cover image of ${singleVolume.title}`}
        width={150}
        height={250}
        />
        
        <ul>
        {books.map((book) => (
                <li key={book.title}>
                    {book.ordinal}: {book.title}</li>
            ))}
        </ul>

        <button
        type="button"
        onClick={() =>{
            router.push("/overview");
        }}
        >
            Back to Overview
        </button>
    </main>
)
}