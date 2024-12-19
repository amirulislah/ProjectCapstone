import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center p-6">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
            <h2 className="text-3xl font-bold mb-4 text-center  text-green-600 ">Hubungi Kami</h2>
            <p className="text-gray-600 text-center mb-8">
              Ingin menghubungi kami? Kami senang mendengar kabar dari Anda. Berikut adalah cara untuk menghubungi kami.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Berbicara dengan Tim Penjualan */}
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Berbicara dengan Tim Konsultasi</h3>
                <p className="text-gray-600 text-center mb-4">
                  Tertarik dengan layanan kami? Angkat telepon Anda dan hubungi anggota tim Konsultasi kami.
                </p>
                <a href="tel:+35315124400" className="text-blue-600 font-bold">
                  +62 895361519577
                </a>
              </div>
              {/* Hubungi Dukungan Pelanggan */}
              <div className="bg-green-600 hover:bg-green-700 p-8 rounded-lg shadow-lg max-w-md mx-auto text-white">
                <h2 className="text-3xl font-bold text-center mb-6">KONTAK KAMI</h2>
                <div className="bg-white text-gray-800 rounded-lg p-6 space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-500 text-3xl">📧</div>
                    <p className="text-lg font-semibold">hello@Hidroakuaponik.com</p>
                  </div>
                  {/* Alamat */}
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-500 text-3xl">📍</div>
                    <p className="text-lg font-semibold">87 Morodemak, Bonang</p>
                  </div>
                  {/* Website */}
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-500 text-3xl">🌐</div>
                    <p className="text-lg font-semibold">www.hidroakuaponik.com</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Contact;
