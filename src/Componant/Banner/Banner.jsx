import banner from '../../assets/images/banner.jpg';
const Banner = () => {
    return (
        <div className='bg-[#2C3E50] flex h-full p-5 md:p-[100px]'>
            <div className='border flex md:justify-between'>
                <div className=''>
                    <h2 className="text-xl font-semibold text-white">Hi, My name is</h2>
                    <h2 className="text-5xl font-bold WorkSans my-3 text-white">Md. Manik Sarkar</h2>
                    <h2 className="text-4xl font-bold WorkSan text-green-500">Web Developer</h2>
                    <p className="w-2/3 text-lg font-bold my-3 text-white">Being interested to explore technologies I found web development as my passion. I am aspiring to bring that passion to a full-time role.</p>
                    <a 
                    href="/public/Untitled document.pdf" 
                    download={`Untitled document.pdf`}
                    className='text xl font-semibold text-white border-2 px-3 py-2'
                    >Download Resume</a>
                </div>
                <div>
                    <img className='h-[300px] w-[400px]' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;