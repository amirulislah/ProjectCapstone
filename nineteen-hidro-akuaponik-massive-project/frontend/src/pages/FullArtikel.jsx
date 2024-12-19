import Layout from "../components/Layout"
import { article } from '../utils/data'
import { produk } from "../constans/produk"
import { useNavigate, useParams } from "react-router"

const Artikel = () => {
const router = useNavigate()
    
    return (
        <Layout>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-x-4 p-10 mx-3'>
                       {/* Product Content */}
                       {produk.map((item, index) => (
                         <div
                           key={index}
                           className="cursor-pointer border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 "
                           onClick={() => router(`/article/${item.id}`)}
                         >
                           <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
                           <h3 className="text-lg font-bold mt-2">{item.name}</h3>
                           <p className="text-sm text-gray-600">{item.description}</p>
                         </div>
                       ))}
                     </div>
        </Layout>
    )
}

export default Artikel