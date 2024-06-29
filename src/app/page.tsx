import { Header } from "./(website)/components/Header";
import { Hero } from "./(website)/components/Hero";

export default function Home() {
  return (
    <section className="mx-auto">
      <header className="">
        <Header />
      </header>
      <main className="">
        <Hero />
      </main>
    </section>
  );
}
