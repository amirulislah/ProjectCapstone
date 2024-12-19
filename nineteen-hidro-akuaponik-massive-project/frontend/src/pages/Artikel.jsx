import Layout from "../components/Layout"
import { article } from '../utils/data'
import { useParams } from "react-router"

const Artikel = () => {
    const getPath = useParams()
    const findByName = article?.find(item => item.id === Number(getPath.id))
    const data = findByName
    console.log(data);
    
    return (
        <Layout>
            <div className="p-20 bg-gray-50 rounded shadow">
                <h1 className="text-xl font-bold text-gray-800 text-center mb-2">{data.title}</h1>
                <h2 className="text-xl font-bold text-gray-800 text-center mb-2">{data.content}</h2>
                <h6 className="text-md text-gray-500 text-center mb-2 ">{data.author}</h6>
                <img
                    src={data.image}
                    className="w-full h-96 rounded-lg mb-6"></img>
                <p className="text-base text-gray-00 mb-4 tracking-wide">{data.description}</p>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.subContent && data.subContent.title}</h2>
                <p className="text-base text-gray-00 mb-4 tracking-wide">{data.subContent &&  data.subContent.subtitle}</p>
                <ol className="">
                    {data.subContent && data.subContent.list.map((item, index) => <li key={index}>
                        <h5 className="font-semibold">{item.id}.{item.title}</h5>
                        <p className="mx-5">{item.description}</p>
                    </li>)}
                </ol>
                <p className="text-base text-gray-00 mb-4 tracking-wide my-3">{data.subContent &&  data.subContent.paragraf}</p>
        
                <h4 className="text-lg font-semibold text-gray-700 italic mb-2">{data.category}</h4>

                <h5 className="text-md text-gray-500">{data.keywords}</h5>

            </div>

        </Layout>
    )
}

export default Artikel