import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 md:grid md:grid-cols-5 justify-self-center md:px-30 md:mt-20 md:gap-50 mt-10 md:pt-20">
                <div>
                    <h1 className='text-2xl font-semibold'>CS Ticket System</h1>
                    <p>The Ticket System is a professional, React-based customer support dashboard designed to manage and track service requests through a dynamic workflow. It follows a clean, Figma-inspired design that prioritizes high scannability and real-time status updates.</p>
                </div>
                <nav>
                    <h6 className="footer-title text-2xl font-semibold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-2xl font-semibold">Services</h6>
                    <a className="link link-hover">Product & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download AApps</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-2xl font-semibold">Information</h6>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-2xl font-semibold text-white">Social Links</h6>
                    <div className="md:flex md:flex-col gap-4 mt-2 flex">
                        <a href="https://github.com/your-username" target="_blank" className="link link-hover text-2xl hover:text-primary transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" className="link link-hover text-2xl hover:text-blue-600 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="link link-hover text-2xl hover:text-blue-400 transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="https://facebook.com" target="_blank" className="link link-hover text-2xl hover:text-blue-700 transition-colors">
                            <FaFacebook />
                        </a>
                    </div>
                </nav>
            </footer>
            <div className="bg-neutral">
                <div className="md:mx-30 border-t border-gray-700"></div>
                <aside className='text-white text-center py-10'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by webdiv-rakib</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;