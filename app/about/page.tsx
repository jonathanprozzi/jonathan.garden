export default function About() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col  items-center justify-center gap-4">
        <h1 className="text-bold text-xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-500">
          About Me
        </h1>
        <div>
          <p>
            I&apos;m a product engineer interested in learning,
            decentralization, and tools for thought.
          </p>
        </div>
      </div>
    </main>
  );
}
