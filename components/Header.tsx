import Image from 'next/image'; // Import Image from Next.js

const Header = () => {

    return (
<div className="max-w-gui w-full flex flex-row gap-2">
          <div className="w-full flex items-center justify-between pb-4 gap-2">
            {/* Left section: Logo and Text */}
            <div className="flex items-center gap-2">
            <Image
                priority
                src="/img/logo.svg"
                height={32}
                width={32}
                alt="g. ui/ux"
              />
              
              <div className="text-xl font-bold text-zinc-500 logo-text">
                <span className="text-zinc-200">g. ui</span>/ux
              </div>
            </div>
            </div>
            {/* Right section: Icon */} 
            <Image
                priority
                src="/icons/language.svg"
                height={32}
                width={32}
                color='#FFFFFF'
                alt="g. ui/ux"
              />
         
        </div>
    )
}

export default Header;