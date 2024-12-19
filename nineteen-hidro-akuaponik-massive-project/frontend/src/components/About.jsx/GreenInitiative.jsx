import React from 'react';

const GreenInitiative = () => {
  return (
    <div className="bg-green-900 text-white items-center p-6 rounded-lg flex flex-col lg:flex-row pl-20 mx-40 gap-8">
      {/* Konten Kiri */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl mx-10 p-15 font-bold">
          Tentang <span className="text-green-400">Kami</span>
        </h1>
        <p className="mt-4 text-sm lg:text-base leading-relaxed mx-10">
        Hadir untuk memberikan panduan bagi Anda yang ingin memulai budidaya hidroponik dan akuaponik. Temukan beragam opsi yang disesuaikan dengan kebutuhan Anda. Kami memberikan solusi terbaik guna meningkatkan kinerja bisnis anda.
        </p>
      </div>
      {/* Konten Kanan */}
      
      <div className="flex-1 bg-white text-black rounded-lg shadow-lg pl-10 p-4 mx-3 my-3 ">
      
        <h4 className="text-left lg:text-3xl font-bold items-start relative">Berita Terbaru</h4>
        {/* Artikel 1 */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="src/assets/foto10.jpg" // Ganti dengan URL gambar artikel
            alt="Thumbnail"
            className="w-20 h-20 rounded-md object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold hover:underline cursor-pointer">
              Wakili Indonesia di Konferensi COP29, Jerhemy Owen Angkat soal Isu Lingkungan
            </h2>
          </div>
        </div>
        {/* Artikel 2 */}
        <div className="flex items-center gap-4">
          <img
            src="src/assets/foto11.jpg" // Ganti dengan URL gambar artikel
            alt="Thumbnail"
            className="w-20 h-20 rounded-md object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold hover:underline cursor-pointer">
              Kelompok Tani Bersama BRI Menanam-Grow & Green Pulihkan Hutan Bekas Tambang
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenInitiative;
