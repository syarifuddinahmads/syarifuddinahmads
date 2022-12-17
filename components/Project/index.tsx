import * as Icon from "phosphor-react";
const Project = () => {

    const socialIconSize = 26

    return <>
        <section className="py-10 py-lg-20 text-center text-md-start bg-bg-1">
            <div className="container">
                <div className="row justify-content-center mb-15">
                    <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 text-center">
                        <h2 className="mb-6 display-5 text-light-1 aos-init aos-animate" data-aos="fade-down"
                            data-aos-delay="0">
                            Our Project's
                        </h2>
                    </div>
                </div>
                <div className="mb-15 mb-md-8 row align-items-center flex-md-row-reverse justify-content-center">
                    <div className="mb-8 mb-md-0 col-10 col-sm-7 col-md-5 col-xl-4">
                        <img src="https://jedangoding.com/logo.png"
                            alt="Jeda Ngoding" className="img-fluid w-100 aos-init aos-animate" data-aos="fade-down" data-aos-delay="250" />
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6 col-xl-5 col-xxl-4">
                        <h4 className="mb-6 remove-br text-light-1 aos-init aos-animate" data-aos="fade-down"
                            data-aos-delay="400">
                            Jeda Ngoding
                        </h4>
                        <p className="mb-8 fs-4 text-light-2 aos-init aos-animate" data-aos="fade-down" data-aos-delay="500">
                            Jeda Ngoding is a digital education platform that focuses on developing digital talent in improving programming skills.
                        </p>
                        <a href="https://jedangoding.com/" target="_blank" className="btn btn-sm btn-action-1 aos-init aos-animate">Visit Site <Icon.Link size={socialIconSize} /></a>
                    </div>
                </div>
                {/* <div className="row align-items-center justify-content-center">
                    <div className="mb-8 mb-md-0 col-10 col-sm-7 col-md-5 col-xl-4">
                        <img src="../../assets/feature-17-2.png"
                            alt="" className="img-fluid w-100 aos-init aos-animate" data-aos="fade-down" data-aos-delay="250" />
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6 col-xl-5 col-xxl-4">
                        <h4 className="mb-6 remove-br text-light-1 aos-init aos-animate" data-aos="fade-down"
                            data-aos-delay="400">
                            We could create anything.
                            <br />Let’s do it together
                        </h4>
                        <p className="mb-0 fs-4 text-light-2 aos-init aos-animate" data-aos="fade-down" data-aos-delay="500">
                            Everything you need to build your site in one place.
                            <span className="text-nowrap">
                                All-in-one
                            </span>
                            website builder for designers and creators. Your big idea starts here.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    </>
}

export default Project