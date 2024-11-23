import Carousel from "react-bootstrap/Carousel";

export default function Section3() {
  return (
    <div className="bg-cyan-100	 text-teal-800 py-[50px]">
      <div className="">
        <h1 className="text-xl text-center ">SECTION 3 [25 points]</h1>
      </div>
      <Carousel
        data-bs-theme="dark"
        className="mx-[10%] px-[10%] py-[50px] flex items-center justify-center"
      >
        <Carousel.Item>
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-semibold text-center mb-6">
              Lorem, ipsum.
            </h2>
            <p className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam
              debitis id quod vitae asperiores maxime minima quo quae temporibus
              blanditiis, iusto officia culpa minus aperiam laboriosam ut
              dignissimos nulla nihil cupiditate ipsum doloremque numquam facere
              sed? Quas quis cum vel quaerat optio. Hic iure eos blanditiis at,
              excepturi enim?
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-semibold text-center mb-6">
              Lorem, ipsum.
            </h2>
            <p className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam
              debitis id quod vitae asperiores maxime minima quo quae temporibus
              blanditiis, iusto officia culpa minus aperiam laboriosam ut
              dignissimos nulla nihil cupiditate ipsum doloremque numquam facere
              sed? Quas quis cum vel quaerat optio. Hic iure eos blanditiis at,
              excepturi enim?
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-semibold text-center mb-6">
              Lorem, ipsum.
            </h2>
            <p className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam
              debitis id quod vitae asperiores maxime minima quo quae temporibus
              blanditiis, iusto officia culpa minus aperiam laboriosam ut
              dignissimos nulla nihil cupiditate ipsum doloremque numquam facere
              sed? Quas quis cum vel quaerat optio. Hic iure eos blanditiis at,
              excepturi enim?
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="grid justify-center">
        <button className=" inline-block px-4 py-2 text-white bg-teal-800 rounded outline-none">
          Slider Button
        </button>
      </div>
    </div>
  );
}
