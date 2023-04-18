import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
            <div className={`flex-[1] flex flex-col justify-start sm:flex-col sm:${styles.flexStart} md:${styles.flexStart}`}>
                <div className='w-full flex py-4 justify-between  items-center navbar'>
                    <img
                        src='./src/assets/tomLogo.png'
                        alt="hoobank"
                        className="w-[194px] h-[194px] object-contain"
                    />
                    <h3 className={`${styles.heading2}`}>Bank</h3>
                </div>
                <p className={`${styles.paragraph} mt-1 max-w-[312px] text-center`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {footerlink.title}
                        </h4>
                        <ul className="list-none mt-4">
                            {footerlink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright Ⓒ 2022 Tom Bank. All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Footer;