const article = () => {
    // Artikel lainnya

    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Daftar Artikel</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {article.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    <b>Author:</b> {item.author}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <b>Kategori:</b> {item.category}
                  </p>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );    
};
export default article