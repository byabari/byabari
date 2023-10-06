import Resume, { Technologies } from "@/components/Resume";

export default function HomePage() {
  return (
    <>
      <div className="h-[60vh] flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-5">
          Hi, I'm Bari Abbassi
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          I'm a product-minded Full Stack Engineer
        </h2>
        <p className="mb-3">
          I enjoy building web apps from design to backend. My latest product is{" "}
          <a
            className="underline underline-offset-4"
            href="https://linkfolders.com"
            target="_blank"
          >
            linkfolders.com
          </a>
          . My favorite tools are
        </p>
        <Technologies technologies={["React", "Next.js"]} />
      </div>
      <Resume />
    </>
  );
}
