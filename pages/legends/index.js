import Link from 'next/link'
import styles from '../../styles/Legends.module.css'


export const getStaticProps = async () => {

    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { legends: data }
    }

}

const Legends = ({ legends }) => {
    return ( 
        <div>
            <h1>All Legends</h1>
            {legends.map(legend => (
                <Link href={'/legends/' + legend.id} key={legends.id}>
                    <a className={styles.single}>
                        <h3>{ legend.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Legends;