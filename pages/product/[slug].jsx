import { sanityClient} from "../../lib/sanity";
import Cart from "../../components/description/Description";

export default function ProductDetail({product}) {

  return (
    <div >
      <Cart product={product} />
    </div>
  )
}


 export const getStaticPaths = async () => { 
    const techno = `*[_type == "technoPhone"]{
        slug {
            current
        }
    }`;
    const product = await sanityClient.fetch(techno);
    const paths = product.map((phone) => ({
        params: {
                    slug: phone.slug.current
                }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
 }


export const getStaticProps = async ({params: {slug}}) => {

   const techno = `*[slug.current == '${slug}'][0]`
    
    const product = await sanityClient.fetch(techno);
    return {
      props: { product},
    };  
}
