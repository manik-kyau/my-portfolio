import banner from '../../assets/images/banner.jpg';
const Banner = () => {
    return (
        <div className='bg-[#2C3E50] flex h-full p-5 md:p-[80px] WorkSans'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                <div className='flex flex-col md:w-1/2'>
                    {/* text-[#1ABC9C] */}
                    <h2 className="text-2xl font-semibold text-[#9af10f]">Hi, My name is</h2>
                    <h2 className="text-5xl font-bold WorkSans my-3 text-white">Md. Manik Sarkar</h2>
                    <h2 className="text-4xl font-bold WorkSan text-[#9af10f]">Web Developer</h2>
                    <p className=" text-lg font-semibold mt-3 mb-7 text-white"> Frontend Developer with a focus on React, creating user-friendly web interfaces. Passionate about Web Development, Software Engineering and interactive experiences. I have a graduate degree in Computer Science & Engineering (CSE), bringing fresh ideas and a strong drive for innovation.Let's connect and explore new opportunities!</p>
                    <a 
                    href="https://drive.google.com/uc?export=download&id=1tmDWSgxvHAXW6mQ6QAQoUoG9v9zDVV86" 
                    download
                    className='text-xl font-semibold text-white border-2 border-[#9af10f] px-3 py-2 my rounded-md w-[220px]'
                    >Download Resume</a>
                </div>
                <div className=''>
                    <img className='h-[400px] w-full md:w-[350px] rounded-xl' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;