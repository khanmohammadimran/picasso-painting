import React from 'react';
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

const Footer = () => {
    return (
        <div>
            <footer class="footer footer-center p-10 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-raleway">
                <div>

                    <p class="font-bold">
                        Khan Mohammad Imran <br />
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                    <div class="grid grid-flow-col gap-4">
                        <a href='https://github.com/khanmohammadimran'><img className='w-6' src={github} alt="" /></a>
                        <a href='https://github.com/khanmohammadimran'><img className='w-6' src={linkedin} alt="" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;