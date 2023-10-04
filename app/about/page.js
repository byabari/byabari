import Image from "next/image";

export default function About() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-24 mb-8">About</h1>
      <div className="space-y-5 mb-12">
        <p>
          My name is Bari Abbassi. I'm a product-minded Full Stack Engineer.
        </p>
        <p>
          I was born in Amsterdam, grew up in Tangier, and studied Computer
          Science in Paris.
        </p>
        <p>
          I enjoy building stuff using code. React, Next.js, and Firebase are
          among my favorite tools.
        </p>
        <p>
          You can also find me taking pictures of friends and random interesting
          things. For a sneak peek, check out my Instagram.
        </p>
        <p>
          Cycling is both my favorite transportation method and my favorite
          physical activity. I used to do a lot of races a few years back.
        </p>
        <p>
          You can contact me at:{" "}
          <a href="mailto:bari@abbas.si">bari@abbas.si</a>
        </p>
      </div>
      <Image src="/bari_abbassi.jpg" width={400} height={400} />
    </>
  );
}
