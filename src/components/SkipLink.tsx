export default function SkipLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.getElementById("main");
    main?.focus();
    main?.scrollIntoView();
  };

  return (
    <a
      href="#main"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-on-primary"
    >
      Pular para o conteúdo
    </a>
  );
}
