import aboutImg1 from "../../../assets/images/about_us/parts.jpg"
import aboutImg2 from "../../../assets/images/about_us/person.jpg"

const AboutUs = () => {
    return (
        <div className="grid md:grid-cols-2 mt-20 ">
            <div className="relative about-container">
                <figure><img className="w-96 h-96 rounded-lg" src={aboutImg2} alt="Movie" /></figure>
                <div className="absolute right-1/4 top-1/3 border-8 border-white rounded-lg">
                    <img className="w-72 h-64" src={aboutImg1} alt="" />
                </div>
            </div>
            <div className="card">
                <div className="px-8 py-0">
                    <h4 className="font-bold text-xl text-error">About Us</h4>
                    <h2 className="text-3xl lg:text-5xl font-bold mt-5 mb-7">We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="mt-5 mb-7">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <div className="card-actions">
                        <button className="btn btn-error">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;