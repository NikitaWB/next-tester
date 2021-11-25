export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(legend => {
        return {
            params: { id: legend.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();

    return {
        props: { legend: data }
    }
}

const Details = ({ legend }) => {
    return ( 
        <div>
            <h1>{ legend.name }</h1>
            <p>{ legend.email }</p>
            <p>{ legend.website }</p>
            <p>{ legend.address.city }</p>
        </div>
     );
}
 
export default Details;