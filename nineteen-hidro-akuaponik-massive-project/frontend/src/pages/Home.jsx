import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useLocation, useNavigate } from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { produk } from '../constans/produk';
import Faq from '../components/Faq';
import GreenInitiative from '../components/About.jsx/GreenInitiative';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";



const Home = () => {
  
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(location.state == null){
            navigate('/')
        }
      },[])
  return (
    <Layout >
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-left py-36"
        style={{
          backgroundImage: 'url("/src/assets/foto2.jpg")', // Ubah path sesuai dengan image Anda
        }}
      >

        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-extrabold font-montserrat text-white">
            Welcome to HidroAkuaponik
          </h1>
          <p className="mt-4 text-lg text-white font-montserrat font-medium">
            HidroAkuaponik adalah platform edukasi dan informasi yang berfokus{" "}
            <br />
            pada teknologi budidaya pertanian berkelanjutan yang menggabungkan
            <br />
            hidroponik dan akuaponik
          </p>
          <Link to="article">
            <button className="mt-6 px-8 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 font-montserrat">
              Learn More
            </button>
          </Link>


        </div>
      </section>
      {/* Services Section */}

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


      <section>
        <div className='justify-center p-10 py-10 mx-10 '>
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-left pl-3 my-5">
            Artikel
          </h2>
          <div className='flex space-x-4 '>
            {/* Product Content */}
            {produk.filter((data, index) => index < 3).map((item, index) => (
              <div
                key={index}
                className="cursor-pointer border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 "
                onClick={() => navigate(`/article/${item.id}`)}
              >
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
                <h3 className="text-lg font-bold mt-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-center my-5'>
            <button
              className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              onClick={() => navigate('/article')}>
              Artikel Lainnya
            </button>
          </div>
        </div>
      </section>
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
      <section>
        <div className='justify-center pl-10 mx-10 my-3'>
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-left pl-2 my-3 ">Produk Populer</h2>

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <div className="w-full relative">
              <div className="swiper default-carousel swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="bg-indigo-50 rounded-2xl flex m-10">
                      <img src="/src/assets/foto1.jpg" alt="foto" className='w-96 rounded-l-2xl' />
                      <div className='p-10'>
                        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-3">Bayam</h2>
                        <p>Keunggulan bayam yang ditanam dengan metode aquaponik antara lain adalah pertumbuhannya yang lebih cepat dan kandungan nutrisinya yang lebih kaya. Bayam aquaponik bebas dari pestisida dan bahan kimia, sehingga lebih aman untuk dikonsumsi. Selain itu, bayam ini memiliki tekstur yang lebih lembut dan rasa yang lebih segar dibandingkan dengan bayam yang ditanam secara konvensional.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-indigo-50 rounded-2xl flex m-10">
                      <img src="/src/assets/foto4.jpg" alt="foto" className='w-96 rounded-l-2xl' />
                      <div className='p-10'>
                        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-3">Selada</h2>
                        <p>Keunggulan selada yang ditanam dengan metode aquaponik antara lain adalah pertumbuhannya yang lebih cepat, kandungan nutrisinya yang lebih tinggi, dan bebas dari pestisida kimia. Selada aquaponik juga memiliki tekstur yang lebih renyah dan rasa yang lebih segar, menjadikannya favorit di pasar sayuran organik.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-indigo-50 rounded-2xl flex m-10">
                      <img src="/src/assets/foto3.jpg" alt="foto" className='w-96 rounded-l-2xl' />
                      <div className='p-10'>
                        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-3">Cabai Merah</h2>
                        <p>Cabai merah aquaponik menjadi solusi inovatif dalam dunia pertanian modern. Dengan memanfaatkan sistem aquaponik, petani dapat menanam cabai merah secara lebih efisien dan ramah lingkungan.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
      <section className="justify-center pl-10 mx-10 my-3">
        {/* Header */}
        <div className=" flex flex-wrap lg:flex-nowrap gap-10 p-6">
          <h2 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-left">
            Video Tips
          </h2>
        </div>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50} // Jarak antar slide
          slidesPerView={3} // Menampilkan 3 slide per tampilan
          navigation
          loop={true} // Mengaktifkan loop
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            // Menambahkan responsivitas
            640: {
              slidesPerView: 1, // Pada layar kecil tampilkan 1 slide
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Pada layar sedang tampilkan 2 slide
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // Pada layar besar tampilkan 3 slide
              spaceBetween: 40,
            },
          }}
        >
          {/* Slides */}
          {[
            {
              title: "Cara Membuat Hidroponik Sederhana",
              description: "Langkah-langkah dasar membuat sistem hidroponik di rumah.",
              videoUrl:
                "https://www.youtube.com/embed/mLdvwruqEpo?si=hfOMbXlfLqi8KHAx",
            },
            {
              title: "Dasar-dasar Aquaponik",
              description: "Panduan dasar membuat sistem aquaponik sederhana.",
              videoUrl:
                "https://www.youtube.com/embed/1T1eVAWh3KY?si=mOdSxVJkCcvwSCqc",
            },
            {
              title: "MANFAAT DAN CARA AQUAPONIK",
              description: "Mari simak Penjelasan Dari Pakar ternama terkait manfaat dan cara Aquaponik",
              videoUrl:
                "https://www.youtube.com/embed/k2UoOCkMg6o?si=WIrrCAuVNd6xqoek",
            },
            {
              title: "PERBEDAAN SISTEM AQUAPONIK DAN HIDROPONIK!",
              description: "Mirip Tapi tak sama, yuk agar tidak salah membedakan mari kita simak video berikut",
              videoUrl:
                "https://www.youtube.com/embed/5DRaCAeCJvM?si=359fXQVcD03k0SUS",
            },
            {
              title: "Memulai Hidroponik dengan Modal Minim",
              description:
                "Tutorial hidroponik untuk pemula dengan biaya terjangkau.",
              videoUrl:
                "https://www.youtube.com/embed/1NnDgJzBAq4",
            },
            {
              title: "Aquaponik untuk Hasil Panen Maksimal",
              description:
                "Cara mengoptimalkan hasil panen dengan sistem aquaponik sederhana.",
              videoUrl:
                "https://www.youtube.com/embed/SEkmVJtgL6M?si=mVWpSnwQRogxKfiG",
            },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-lg shadow-lg bg-white max-w-sm mx-auto p-3">
                <a href="#!">
                  <iframe
                    width="320"
                    height="240"
                    src={item.videoUrl}
                    className="w-full rounded-lg"
                  >
                    {/* <source src={item.videoUrl} type="video/mp4" /> */}
                    {/* Your browser does not support the video tag. */}
                  </iframe>
                </a>
                <div className="p-4">
                  <h5 className="text-gray-900 text-lg font-medium mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/*<section>
        <div className="flex flex-col items-center justify-center text-center mx-1 py-20 bg-green-800">
          <h1 className="text-4xl font-bold  text-white underline">Solusi</h1>
          <p className="text-center  text-white -600 mb-4">
          Optimalkan produktivitas bisnis Anda dengan solusi yang tepat!  
          </p>
          <p className="text-center  text-white -600 mb-4">
          Temukan beragam opsi yang disesuaikan dengan kebutuhan Anda 
          dari teknologi hingga layanan konsultasi. 
          </p>
          <p className="text-center   text-white -600 mb-8">
          Kami hadir untuk memberikan solusi terbaik guna meningkatkan kinerja bisnis Anda.
          </p>
        </div>
      </section>*/}
      {/*<section className='justify-center'>
        <Faq />
      </section>*/}
      {/* <section> 
        <GreenInitiative />
      </section>*/}
    </Layout>
  );
}
export default Home;
