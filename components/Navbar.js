import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className='logo'>
                <Image src="/phoenix-logo.png" width={100} height={70} alt="logo" />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/legends"><a>Legend Listing</a></Link>
            <Link href="/typescript"><a>Typescript Counter</a></Link>
        </nav>
     );
}
 
export default Navbar;