import Image from 'next/image';
import { FaGoogle, FaApple, FaLinkedin} from 'react-icons/fa';
import { SiTesla, SiIntel } from "react-icons/si";

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-12 text-center">
      <h2 className="text-black text-xl font-medium mb-8">Built and trusted by professionals from</h2>
      <div className="text-black flex flex-wrap justify-center items-center gap-8">
        <div>
          <Image src="/images/backed.svg" alt="Nvidia" width={144} height={43} />
        </div>
        <div>
          <FaApple className="w-12 h-12" />
        </div>
        <div>
          <FaGoogle className="w-12 h-12" />
        </div>
        <div>
          <FaLinkedin className="w-12 h-12" />
        </div>
        <div>
          <SiTesla className="w-12 h-12" />
        </div>
        <div>
          <SiIntel className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
};

export default Partners;