import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const frequentlyAskQuestion = [
    {
        titlle: "Produk apa saja yang disediakan Hidroponik dan Akuaponik?",
        descripti:
            "Hidroponik dan akuaponik menyediakan berbagai produk segar dan sehat seperti selada, bayam merah, bokcoy, dan seledri yang ditanam secara hidroponik, serta cabai merah dan bayam hijau dari sistem aquaponik. Selain sayuran, tersedia juga microgreens kaya nutrisi dan paket starter kit hidroponik untuk pemula. Semua produk bebas pestisida, ramah lingkungan, dan cocok untuk gaya hidup sehat.",
    },
    {
        titlle: "Berapa biaya untuk memulai sistem hidroponik atau akuaponik?",
        descripti:
            "Biaya untuk memulai sistem hidroponik atau aquaponik bervariasi tergantung pada skala dan peralatan yang dibutuhkan. Untuk skala kecil, biaya bisa berkisar antara Rp 1.000.000 – Rp 5.000.000, sedangkan untuk skala menengah atau komersial bisa mencapai Rp 10.000.000 – Rp 50.000.000. Biaya ini mencakup peralatan dasar seperti wadah, pompa air, pipa, pupuk, dan sistem filtrasi (untuk aquaponik). Faktor seperti ukuran sistem, jenis tanaman atau ikan, dan teknologi otomatisasi akan mempengaruhi total biaya.",
    },
    {
        titlle: "Apakah platform ini cocok untuk jenis semua tanaman?",
        descripti:
            "Platform hidroponik dan aquaponik cocok untuk banyak jenis tanaman, tetapi tidak semua tanaman dapat tumbuh dengan baik di sistem ini. Tanaman yang cocok untuk kedua sistem ini umumnya adalah sayuran dan tanaman daun yang memiliki kebutuhan air dan nutrisi yang lebih rendah, seperti selada, bayam, bokcoy, dan tomat. Beberapa jenis tanaman seperti cabai, paprika, dan herbs (rempah-rempah) juga sangat cocok untuk hidroponik atau aquaponik.",
    },
];


const Faq = () => {
    const [activeId, setactiveId] = useState(null);

    const togglerFunction = (index) => {
        if (activeId == index) {
            setactiveId(null);
        } else {
            setactiveId(index);
        }
    };
    return (
        <div className='w-full py-10'>
            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center my-5">Pertanyaan</h2>
            <div className='w-[600px] m-auto border rounded-lg overflow-hidden'>
                {frequentlyAskQuestion.map((item, i) => (
                    <div className='border-b last:border-b-0 cursor-pointer'>
                        <div key={i} className={'px-5 py-4 flex items-center justify-center ${activeId ==  i ? "bg-gray-100"}'} onClick={() => togglerFunction(i)}>
                            <p className='flex-1'>{item.titlle}
                            </p>
                            <span>
                                {activeId == i ? (
                                    <FaAngleUp />
                                ) : (
                                    <FaAngleDown />
                                )
                                }
                            </span>
                        </div>
                        {activeId == i && (
                            <div className='px-5 py-4 flex items-center justify-between'>
                                <p>{item.descripti}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq;