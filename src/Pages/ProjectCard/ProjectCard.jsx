import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { _id, title, image, description} = project;
    return (
        <div>
            <div className="card-compact bg-gray-500 shadow-2xl rounded-md WorkSans">

                <div className='p-5'>
                    <img className='h-[200px] w-full rounded-md' src={image} alt="Shoes" />
                </div>

                <div className="card-body text-white">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p className='text-[17px] font-medium'>{description}</p>
                    <Link to={`/details/${_id}`} className="py-2">
                        <button className="text-lg font-semibold py-1 rounded-md border-2 border-[#9af10f] w-full">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
}

export default ProjectCard;