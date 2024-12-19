import Layout from "../components/Layout"
const Services = () => {
  return (
    <Layout>
      <section className="bg-green-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-montserrat font-bold text-center text-green-600">
      Layanan Kami
    </h2>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold text-green-600">
          Solusi Pertanian Berkelanjutan
        </h3>
        <p className="mt-4 text-gray-700">
          Kami menyediakan solusi inovatif untuk meningkatkan hasil panen 
          sambil mempromosikan keberlanjutan.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold text-green-600">
          Konsultasi & Pelatihan
        </h3>
        <p className="mt-4 text-gray-700">
          Konsultan ahli kami menawarkan saran yang 
          dipersonalisasi kepada para petani.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold text-green-600">
          Integrasi Teknologi
        </h3>
        <p className="mt-4 text-gray-700">
          Kami membantu mengintegrasikan teknologi mutakhir untuk meningkatkan 
          efisiensi dan produktivitas.
        </p>
      </div>
    </div>
  </div>
</section>
    </Layout>
  )
}
export default Services;