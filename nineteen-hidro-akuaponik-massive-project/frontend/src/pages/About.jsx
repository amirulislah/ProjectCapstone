import Layout from '../components/Layout'
const About = () => {
    return (
        <Layout>
            <section className="bg-green-50 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Bagian Teks */}
          <div className="md:w-1/2 text-left md:pr-8 p-10 my-5">
            <h2 className="text-3xl font-montserrat font-bold text-green-600 mb-4">
              About US
            </h2>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
              Platform ini menyediakan berbagai sumber informasi yang dapat
              diakses oleh petani, pelajar, atau siapa saja yang tertarik untuk
              mempelajari metode pertanian modern yang ramah lingkungan. Konten
              edukasi mencakup panduan dasar, tutorial langkah demi langkah, serta
              artikel ilmiah tentang teknik optimal dalam sistem hidroponik dan
              akuaponik.
            </p>
          </div>
          {/* Gambar */}
          <div className="md:w-1/2 mt-8 md:mt-10 p-10">
            <img
              src="/src/assets/farming_bg.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
        </Layout>
    )
}
export default About;