
const SkilsCard = ({ skil }) => {
    const { name, skills, image } = skil;
    return (
        <div>
            <div className="card-compact shadow-xl flex-1  bg-gray-500 rounded-lg">
                <div className="flex justify-center items-center pt-10">
                    <img className="h-[100px] w-[100px] rounded-lg" src={image} alt="" />
                </div>
                <div className="card-body text-white ">
                    <h2 className="text-center text-3xl font-bold">{name}</h2>
                    <p className="text-center text-base font-normal pb-3">{skills.slice(0,135)}</p>
                </div>
            </div>
        </div>
    );
};

export default SkilsCard;