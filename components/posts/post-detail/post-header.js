import Image from "next/image";

export default function PostHeader({title, image}) {
    return (
        <header className="flex flex-col gap-y-4">
            <h1 className="text-5xl font-extrabold">
                {title}
            </h1>
            <div className="w-full mx-auto">
                <Image src={image.src} alt={image.alt} width={800} height={500} layout="responsive" className="object-cover rounded-lg"/>
            </div>
        </header>
    )
}