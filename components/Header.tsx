import Image from 'next/image'; // Import Image from Next.js
import Icon from '@/components/Icons'; // Import Icon component

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
            {/* Right section: Icon */}
            <Icon name="dots-horizontal" width="24" height="24" color="#71717A" />
          </div>
        </div>
    )
}

export default Header;