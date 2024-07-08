import { useRef } from "react";
import emailjs from '@emailjs/browser'
import toast from "react-hot-toast";
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nl00dej', 'template_jwcvftj', form.current, {
                publicKey: 'gjM04zZnq6oGVGIfK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Message send.");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            {/* <Helmet>
                <title  className="z-0">Contact</title>
            </Helmet> */}

            <div className="pt-16 bg-[#26384d] max-h-full WorkSans">
                <section className="py-6 md:py-12">
                    <div className="grid grid-cols-1 mx-auto md:grid-cols-2 md:divide-x px-5 md:px-[80px]">
                        <div className="py-6 md:py-0">
                            <h1 className="text-4xl text-white font-bold mb-5">Contact Information</h1>
                            <div className="space-y-4 text-white">
                                <p>
                                    <span className="text-base md:text-lg font-bold text-[#09caba]">Name : </span>
                                    <span className="ml-3 text-base md:text-lg font-normal">Md. Manik Sarkar</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-base md:text-lg font-bold text-[#09caba]">Address : </span>
                                    <span className="ml-3 text-base md:text-lg font-normal">Shahzadpur, Sirajganj, Bangladesh</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-base md:text-lg font-bold text-[#09caba]">Gmail : </span>
                                    <span className="ml-3 text-base md:text-lg font-normal">maniksarkar.kyau.cse@gmail.com</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-base md:text-lg font-bold text-[#09caba]">WhatsApp :</span>
                                    <span className="ml-3 text-base md:text-lg font-normal">+880 1712494686</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-base md:text-lg font-bold text-[#09caba]">Facebook :</span>
                                    <a href="https://www.facebook.com/profile.php?id=100009168905374" className="ml-3 text-base md:text-lg font-normal hover:text-primary hover:underline" target="_blank">https://www.facebook.com/profile.php</a>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-base md:text-lg font-bold text-[#09caba]">LinkedIn :</span>
                                    <a href="https://www.linkedin.com/in/md-manik-sarkar/" className="ml-3 text-base md:text-lg font-normal hover:text-primary hover:underline" target="_blank">www.linkedin.com/in/md-manik-sarkar</a>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-base md:text-lg font-bold text-[#09caba]">GitHub :</span>
                                    <a href="https://github.com/manik-kyau" className="ml-3 text-base md:text-lg font-normal hover:text-primary hover:underline" target="_blank">https://github.com/manik-kyau</a>
                                </p>
                            </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-5 md:py-0 md:pl-10">
                            <h2 className="text-4xl text-white font-bold">Contact Me</h2>
                            <label className="block">
                                <span className="mb-1 text-base md:text-lg font-medium text-white">Name</span>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Enter Name"
                                    className="block px-3 py-3 w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1 text-base md:text-lg font-medium text-white">Email address</span>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Enter Email Address"
                                    className="block w-full px-3 py-3 rounded-md shadow-sm focus:ring outline-none focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1 text-base md:text-lg font-medium text-white">Message</span>
                                <textarea
                                    rows="4"
                                    name="message"
                                    placeholder="Your Message"
                                    className="block px-3 py-3 w-full rounded-md focus:ring focus:ring-opacity-75 outline-none focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                            </label>
                            <button type="submit" className="self-center px-8 py-2 text-lg rounded text-white border-2 w-full">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;