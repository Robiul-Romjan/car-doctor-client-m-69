import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[100vh] mt-8 rounded-xl">
                {/* Slider-1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full items-center">
                        <div className="text-white md:ps-20 ps-8">
                            <h2 className="md:text-5xl text-3xl md:w-1/2  font-bold">Affordable Price For Car Servicing</h2>
                            <p className="lg:w-2/3 my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex flex-col md:flex-row">
                                <button className="btn btn-error text-white btn-sm md:btn-lg mr-5 w-1/2 md:w-1/4 mb-5">Discover More</button>
                                <button className="btn btn-outline btn-error text-white btn-sm md:btn-lg w-1/2 md:w-1/4">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle btn-error text-white mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-error text-white">❯</a>
                    </div>
                </div>
                {/* Slider-2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full items-center">
                        <div className="text-white md:ps-20 ps-8">
                            <h2 className="md:text-5xl text-3xl md:w-1/2  font-bold">Affordable Price For Car Servicing</h2>
                            <p className="lg:w-2/3 my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex flex-col md:flex-row">
                                <button className="btn btn-error text-white btn-sm md:btn-lg mr-5 w-1/2 md:w-1/4 mb-5">Discover More</button>
                                <button className="btn btn-outline btn-error text-white btn-sm md:btn-lg w-1/2 md:w-1/4">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle btn-error text-white mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-error text-white">❯</a>
                    </div>
                </div>
                {/* Slider-3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full items-center">
                        <div className="text-white md:ps-20 ps-8">
                            <h2 className="md:text-5xl text-3xl md:w-1/2  font-bold">Affordable Price For Car Servicing</h2>
                            <p className="lg:w-2/3 my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex flex-col md:flex-row">
                                <button className="btn btn-error text-white btn-sm md:btn-lg mr-5 w-1/2 md:w-1/4 mb-5">Discover More</button>
                                <button className="btn btn-outline btn-error text-white btn-sm md:btn-lg w-1/2 md:w-1/4">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle btn-error text-white mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-error text-white">❯</a>
                    </div>
                </div>
                {/* Slider-4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute flex transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full items-center">
                        <div className="text-white md:ps-20 ps-8">
                            <h2 className="md:text-5xl text-3xl md:w-1/2  font-bold">Affordable Price For Car Servicing</h2>
                            <p className="lg:w-2/3 my-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex flex-col md:flex-row">
                                <button className="btn btn-error text-white btn-sm md:btn-lg mr-5 w-1/2 md:w-1/4 mb-5">Discover More</button>
                                <button className="btn btn-outline btn-error text-white btn-sm md:btn-lg w-1/2 md:w-1/4">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle btn-error text-white mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-error text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;