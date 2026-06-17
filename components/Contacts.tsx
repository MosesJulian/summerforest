import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa6';

const Contacts = () => {
    return (
        <div className="flex flex-col gap-6 p-12 justify-between">
            <h2 className="text-4xl font-bold text-text text-center">Contact Us</h2>
            <div className="grid grid-cols-2 gap-6 items-center justify-around">
                <div className='flex flex-col gap-6 justify-center md:col-span-1 col-span-2'>
                    <a href="https://wa.me/6285280010087" target="_blank" rel="noopener noreferrer" className="flex gap-6 items-center text-text hover:text-secondary hover:scale-105 transition duration-300 text-wrap wrap-anywhere">
                        <FaWhatsapp size={28} />
                        +62-852-8001-0087
                    </a>
                    <a href="tel:+6285280010087" target="_blank" rel="noopener noreferrer" className="flex gap-6 items-center text-text hover:text-secondary hover:scale-105 transition duration-300 text-wrap wrap-anywhere">
                        <FaPhone size={28} />
                        +62-852-8001-0087
                    </a>
                    <a href="mailto:summerforest.watukarung@gmail.com" target="_blank" rel="noopener noreferrer" className="flex gap-6 items-center text-text hover:text-secondary hover:scale-105 transition duration-300 text-wrap wrap-anywhere">
                        <FaEnvelope size={28} />
                        summerforest.watukarung@gmail.com
                    </a>
                    <a href="https://instagram.com/summerforest_watukarung" target="_blank" rel="noopener noreferrer" className="flex gap-6 items-center text-text hover:text-secondary hover:scale-105 transition duration-300 text-wrap wrap-anywhere">
                        <FaInstagram size={28} />
                        summerforest_watukarung
                    </a>
                    <a href="https://www.facebook.com/p/Summerforestwatukarung-61575491987223/" target="_blank" rel="noopener noreferrer" className="flex gap-6 items-center text-text hover:text-secondary hover:scale-105 transition duration-300 text-wrap wrap-anywhere">
                        <FaFacebook size={28} />
                        Summerforestwatukarung
                    </a> 
                </div>
                <div className='h-full md:col-span-1 col-span-2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.6868614741547!2d110.97112727500969!3d-8.234209891798765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bdd9017c40931%3A0x372a086487942d91!2sSummerforest%20Watukarung!5e0!3m2!1sen!2sau!4v1767400696281!5m2!1sen!2sau" width="100%" height="100%" loading="lazy" className="border-0 self-center"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts;