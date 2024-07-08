import { useEffect, useState } from "react";
import SkilsCard from "../SkilsCard/SkilsCard";

const Skils = () => {

    const [skils, setSkils] = useState([]);

    useEffect(() => {
        fetch('https://my-portfolio-server-mu.vercel.app/skils')
            .then(res => res.json())
            .then(data => setSkils(data))
    }, []);

    return (
        <div>
            {/* <Helmet>
                <title>Skills</title>
            </Helmet> */}

            <div className='pt-[72px] bg-[#26384d] px-5 md:px-[80px] max-h-full WorkSans'>
                <h2 className="text-4xl md:text-5xl font-bold text-center mt-8 md:mt-10 text-white">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8  py-10 md:py-14">
                    {
                        skils.map((skill, idx) => <SkilsCard
                            key={idx}
                            skill={skill}
                        ></SkilsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skils;