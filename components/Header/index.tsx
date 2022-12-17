const Header = () => {

    return <>
        <header className="py-20 bg-bg-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
                            className="w-50 aos-init aos-animate" data-aos="fade-down" data-aos-delay="0" />
                    </div>
                    <div className="col-md-6 mt-8 mt-md-0">
                        <h1 className="display-3 mb-6 text-light-1 aos-init aos-animate" data-aos="fade-down"
                            data-aos-delay="150">
                            Ahmad Syarifuddin
                        </h1>
                        <p className="mb-8 fs-1 text-light-2 aos-init aos-animate" data-aos="fade-down" data-aos-delay="250">
                            Software Engineer & UI/UX Enthusiast
                        </p>
                        <a href="https://cal.com/ahmad-syarifuddin-fqrmdv/30min"
                            className="btn btn-action-1 aos-init aos-animate" data-aos="fade-down" data-aos-delay="400">
                            Schedule Meeting
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header