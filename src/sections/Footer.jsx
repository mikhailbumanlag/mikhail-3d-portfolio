const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div>
                    <a className="social-icon" href="https://www.behance.net/mikhailowen" target="_blank"><img src="/assets/behance-white2.svg" alt="behance" className="w-1/2 h-1/2"/></a>
                </div>
                <div>
                    <a className="social-icon" href="https://www.instagram.com/mikhailowendesign/" target="_blank"><img
                        src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/></a>
                </div>
            </div>

            <p className="text-white-500">© 2024 Mikhail Bumanlag. All rights reserved.</p>
        </footer>
    );
};

export default Footer;