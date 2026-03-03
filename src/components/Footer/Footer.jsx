import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 grid grid-cols-4 justify-self-center px-30 mt-20 gap-50">
                <div>
                    <h1 className='text-2xl font-semibold'>CS--Ticket System</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate tempore error optio. Nobis nam eum doloribus ratione totam ipsa voluptatum assumenda ipsum, nesciunt at, ad, vero qui aliquam nisi. Nulla nihil doloribus rem iusto laudantium consequatur temporibus ipsam sequi ab tempora doloremque ullam quasi accusamus, tempore error architecto minus.</p>
                </div>
                <nav>
                    <h6 className="footer-title text-2xl font-semibold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-2xl font-semibold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-2xl font-semibold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <aside className='bg-neutral text-white text-center pb-10'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by webdiv-rakib</p>
            </aside>
        </div>
    );
};

export default Footer;