import Header from "@/components/Header";
import Stripe from "@/components/Stripe";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-black flex flex-col items-center min-w-full p-4 ">
        {/* HEADER AND MENU */}
        <Header />
        <div className="flex flex-col gap-10 max-w-gui w-full">
          <Image
            src="/img/home-photo.png"
            width={480}
            height={400}
            quality={100}
            alt="Portrait of Guilherme Ferreira smiling and holding his daughter during Father's Day. Guilherme, a proud father, is embracing his daughter while holding a Father's Day card that reads 'Feliz Dia dos Pais' (Happy Father's Day). His daughter, smiling warmly, is leaning on his shoulder with her arm around his neck."
          />
          <div className="flex flex-col text-xl gap-2">
            <div className="text-zinc-100">
              Guilherme Pinheiro Ferreira
            </div>
            <div className="text-zinc-600 text-sm font-supplymono font-light">
              <span className="hover:text-zinc-100 transition-colors duration-300">cristão</span> {'//'} <span className="hover:text-zinc-100 transition-colors duration-300">user interface design</span> {'//'} <span className="hover:text-zinc-100 transition-colors duration-300">1989</span> {'//'} <span className="hover:text-zinc-100 transition-colors duration-300">São Paulo & Vancouver</span> 
            </div>
          </div>
          <Stripe />
          <div className="flex flex-col gap-2 text-zinc-400 text-sm font-light">
            <p className="text-xl text-zinc-50 font-supplysans">Bio</p>
            <p className="hover:text-zinc-50 transition-colors duration-300">
              Sou de Campinas, mas moro em São Paulo desde criança. Passei dois
              anos em Vancouver estudando design e animação. Como <span className="font-bold">UI/UX
              Designer</span>, meu foco é resolver problemas visuais de forma simples,
              com um design funcional e toques estéticos que enriquecem a
              experiência do usuário.
            </p>
            <p className="hover:text-zinc-50 transition-colors duration-300">
              Valorizo a pesquisa e trabalho tanto com hipóteses quanto com
              dados. Também gosto de otimizar processos e automatizar fluxos,
              sempre buscando melhorias contínuas.
            </p>
            <p className="hover:text-zinc-50 transition-colors duration-300">
              Nos meus tempos livres, sou fã de videogames, jogos de tabuleiro,
              séries, filmes, animes e leituras, de ficção a estudos bíblicos.
            </p>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
