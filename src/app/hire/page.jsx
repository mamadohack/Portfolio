import Link from "next/link";
import Image from "next/image";

const Page = ({}) => {
  return (
    <main className="min-h-screen">
      <div className="relative max-w-[300px] aspect-square  mx-auto">
        <Image
          width={409} //409
          height={615} //615
          alt="ok"
          priority={true}
          sizes="300px"
          src="https://images.unsplash.com/photo-1706550632858-6216ce4e61a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Image>
        <p className="bg-blue-500 font-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quaerat reiciendis numquam iste laboriosam dolores, ullam repellat
          deserunt ipsum. Praesentium dolorem velit consequatur placeat in
          minima esse aliquam libero facilis?
        </p>
      </div>
    </main>
  );
};

export default Page;
