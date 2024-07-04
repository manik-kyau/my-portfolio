import about from '../../assets/images/about.jpg';
const About = () => {
    return (
        <div className="pt-16 px-5 md:px-[80px] bg-[#26384d] h-full">
            <div className='py-14 flex flex-col md:flex-row gap-8'>
                <div className='w-[460px]'>
                    <img className='h-[400px] w-full md:w-[400px] rounded-md md:rounded-full' src={about} alt="" />
                </div>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-4xl font-bold text-white mb-1'>About <span className='text-[#9af10f]'>Me</span></h1>
                    <hr />
                    <h2 className='text-2xl font-bold text-white my-3'>Frontend Developer</h2>
                    <div className='space-y-5'>
                        <p className='text-white text-lg'>I’m Md. Manik Sarkar. I’m from Shahzadpur, Sirajganj, Bangladesh. I have completed Bsc. in computer science and engineering (CSE) from <a className='text-[#9af10f] font-bold hover:underline' href="https://www.kyau.edu.bd/" target="_blank">Khwaja Yunus Ali University (KYAU)</a>, Enayetpur, Sirajganj.</p>

                        <p className='text-white text-lg'>I have learned from last 7 months a few web-related technologies and programming languages like HTML, CSS, Tailwind CSS, JavaScript, React.js, MaterialUI, Node.js, Express.js, MongoDB, and firebase Authentication system.</p>

                        <p className='text-white text-lg'>While in love with JavaScript, my preference is to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment. <a className='text-[#9af10f] hover:underline' href="https://github.com/manik-kyau" target="_blank">My GitHub Link</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;