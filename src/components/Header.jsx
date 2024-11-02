

import { Button } from "@/components/ui/button";


export default function Header () {
  const changeLanguage = () => {
    // get the current pathname
    const currentPath = window.location.pathname;
    // check if the current pathname is /en
    if (currentPath === "/en") {
      // if it is, change the pathname to /pt
      window.location.pathname = "/pt";
    } else {
      // if it is not, change the pathname to /en
      window.location.pathname = "/en";
    }
  }
  return (
    <header>
      <Button className="w-fit" variant={'outline'} onClick={changeLanguage}>
          <span className="material-symbols-rounded">translate</span>
        </Button>
    </header>
  );
}