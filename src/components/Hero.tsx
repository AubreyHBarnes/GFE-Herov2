import Image from "next/image";

export default function Hero() {
    return (
        <section className="mt-[8rem] py-8 px-4 flex flex-col md:flex-row justify-center items-center max-w-[1200px] m-auto">
            <div className="hero-copy-container w-full md:w-1/2">
                <h1 className="hero-heading font-semibold text-3xl md:text-6xl">Premium abstract images</h1>
                <ul className="pt-[4rem] flex flex-col gap-4">
                    <li className="list-marker-check text-neutral-600">Minimum 5k Image Resolution</li>
                    <li className="list-marker-check text-neutral-600">Various format variants available</li>
                    <li className="list-marker-check text-neutral-600">Retina Display Support</li>
                </ul>
                <div className="cta-btn-container pt-[4rem] flex flex-row gap-6 items-center">
                    <a role="button" className="secondary-btn shadow-md px-6 md:px-[2.5rem] py-4 border bg-white hover:bg-neutral-50 border-neutral-200 rounded-md
                    transition-colors ease-in-out duration-300">Learn More</a>
                    <a role="button" className="primary-btn bg-indigo-700 hover:bg-indigo-800 text-white shadow-md px-6 md:px-[2.5rem] py-4 border border-neutral-200
                    rounded-md transition-colors ease-in-out duration-300">See Pricing</a>
                </div>
            </div>
            <div className="hero-img-container w-full md:w-1/2">
                <Image
                src={'/Hero_image.jpg'}
                alt="Hero Image"
                width={1392}
                height={1052} />
            </div>
        </section>
    );
}