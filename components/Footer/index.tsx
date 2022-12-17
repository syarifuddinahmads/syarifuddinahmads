import * as Icon from "phosphor-react";


const Footer = () => {

    const socialIconSize = 36

    return <>
        <footer className="pb-md-8 pt-md-10 py-8 text-center bg-bg-1">
            <div className="container">
                <a href="https://www.linkedin.com/in/syarifuddinahmads/" className="m-2" target="_blank" rel="noopener noreferrer">
                    <Icon.LinkedinLogo size={socialIconSize} />
                </a>
                <a href="https://github.com/syarifuddinahmads" className="m-2" target="_blank" rel="noopener noreferrer">
                    <Icon.GithubLogo size={socialIconSize} />
                </a>
                <a href="https://twitter.com/mas_udinnn" className="m-2" target="_blank" rel="noopener noreferrer">
                    <Icon.TwitterLogo size={socialIconSize} />
                </a>
                <a href="https://www.youtube.com/@syarifuddinahmads" className="m-2" target="_blank" rel="noopener noreferrer">
                    <Icon.YoutubeLogo size={socialIconSize} />
                </a>
                <a href="https://www.instagram.com/syarifuddinahmads/" className="m-2" target="_blank" rel="noopener noreferrer">
                    <Icon.InstagramLogo size={socialIconSize} />
                </a>
                <div className="mt-10 mb-8 border-bottom border-light-3 aos-init aos-animate" data-aos="fade-down" data-aos-delay="400">
                </div>
                <p className="fs-5 mb-0 text-light-2 aos-init aos-animate" data-aos="fade-down" data-aos-delay="500">
                    Copyright © 2022 masudin.space
                </p>
            </div>
        </footer>
    </>
}

export default Footer