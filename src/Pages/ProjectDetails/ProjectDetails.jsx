
import { FaGithub } from "react-icons/fa";
import { PiLinkFill } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {

    const project = useLoaderData();
    return (
        <div className="pt-16 bg-[#26384d] px-5 md:px-[80px] WorkSans">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center pt-8">Project Details</h2>
            <div className="py-8 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-2">
                    <div className="md:col-span-2 md:row-span-4">
                        <img className=" w-full h-[630px] rounded-md" src={project.bimage1} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img className=" w-full h-[150px] rounded-md" src={project.bimage2} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img className=" w-full h-[150px] rounded-md" src={project.bimage3} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img className=" w-full h-[150px] rounded-md" src={project.bimage4} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img className=" w-full h-[150px] rounded-md" src={project.bimage5} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img className=" w-full h-[150px] rounded-md" src={project.bimage6} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img className=" w-full h-[150px] rounded-md" src={project.bimage7} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img className=" w-full h-[150px] rounded-md" src={project.bimage8} alt="" />
                    </div>
                    <div className="col-span-1">
                        <img className=" w-full h-[150px] rounded-md" src={project.bimage9} alt="" />
                    </div>
                </div>

                <div className="text-white mt-8 md:mt-14 px-5 md:px-10">
                    <div className="">
                        <h2 className="text-4xl font-bold text-center mb-8">Usage Technology</h2>
                        <div>
                            {
                                project.technology.map((tec, idx) => <ul className="list-disc" key={idx}>
                                    <li className="text-lg font-medium">{tec}</li>
                                </ul>)
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-center my-8">Project features</h2>
                        <div>
                            {
                                project.features.map((fet, idx) => <ul className="list-disc" key={idx}>
                                    <li className="text-lg font-medium">{fet}</li>
                                </ul>)
                            }
                        </div>
                    </div>
                    {/*  */}
                    <div className="space-x-5 mt-5 flex">
                        <button className="text-lg font-bold px-5 py-1 border-2 border-[#9af10f] rounded-md flex items-center gap-1">
                            <FaGithub />
                            <a href={project.clientSite} target="_blank">Client</a>
                        </button>
                        <button className=" text-lg font-bold px-5 py-1 border-2 border-[#9af10f] rounded-md flex items-center gap-1">
                            <FaGithub />
                            <a href={project.serverSite} target="_blank">Server</a>
                        </button>
                        <button className="text-lg font-bold px-5 py-1 border-2 border-[#9af10f] rounded-md flex items-center gap-1">
                            <PiLinkFill />
                            <a href={project.liveLink} target="_blank">Live</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;