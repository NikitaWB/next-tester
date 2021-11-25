import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className='logo'>
                <Image src="/phoenix-logo.png" width={128} height={77} alt="logo" />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/legends"><a>Legend Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;