import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Section2() {
  const [cardata, setCardata] = useState([]);
  const [animaldata, setAnimaldata] = useState([]);
  const [sportdata, setSportdata] = useState([]);
  const [housedata, setHousedata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://api.tvmaze.com/search/shows?q=cars");
        const data = await res.json();
        setCardata(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://api.tvmaze.com/search/shows?q=animals");
        const data = await res.json();
        setAnimaldata(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "http://api.tvmaze.com/search/shows?q=football"
        );
        const data = await res.json();
        setSportdata(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://api.tvmaze.com/search/shows?q=house");
        const data = await res.json();
        setHousedata(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Please wait...</p>;
  }

  return (
    <div className="px-[10%] py-[50px] text-teal-800">
      <div>
        <h1 className="text-xl text-center pb-16">SECTION 2 [20 points]</h1>
      </div>
      <div className="grid gap-y-6">
        <Accordion>
          <Accordion.Item className="border-none">
            <Accordion.Header className="w-[70vw] m-auto">
              Cars
            </Accordion.Header>
            <Accordion.Body className="grid gap-y-2 grid-cols-1 justify-evenly sm:grid-cols-1 gap-x-4 md:grid-cols-2 gap-x-6 lg:grid-cols-3 gap-x-6">
              {cardata
                .filter((_, index) => index === 0 || index === 1 || index === 2)
                .map((item, index) => (
                  <div key={index}>
                    <div className=" ">
                      <h3 className="text-center font-bold mb-2">
                        {item.show.type}
                      </h3>
                      <div className="flex flex-col justify-between border-2 border-solid border-blue-500 pt-4 rounded-2xl text-center w-auto h-full sm:h-[560px]">
                        <div className="px-2">
                          <h3 className="text-center font-bold mb-2">
                            {item.show.name}
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.show.summary,
                            }}
                            className="text-xs"
                          ></p>
                        </div>
                        <div className="mt-1">
                          <button
                            href={item.show.officialSite}
                            className="py-2 bg-blue-800 text-white outline-none w-full rounded-b-xl"
                          >
                            Click
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="grid gap-y-6">
        <Accordion>
          <Accordion.Item className="border-none">
            <Accordion.Header className="w-[70vw] m-auto">
              Animals
            </Accordion.Header>
            <Accordion.Body className="grid gap-y-2 grid-cols-1 justify-evenly sm:grid-cols-1 gap-x-4 md:grid-cols-2 gap-x-6 lg:grid-cols-3 gap-x-6">
              {animaldata
                .filter((_, index) => index === 0 || index === 1 || index === 2)
                .map((item, index) => (
                  <div key={index}>
                    <div className=" ">
                      <h3 className="text-center font-bold mb-2">
                        {item.show.type}
                      </h3>
                      <div className="flex flex-col justify-between border-2 border-solid border-blue-500  pt-6 rounded-2xl text-center w-auto sm:h-[540px]">
                        <div className="px-2">
                          <h3 className="text-center font-bold mb-2">
                            {item.show.name}
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.show.summary,
                            }}
                            className="text-xs"
                          ></p>
                        </div>
                        <div className="mt-2">
                          <button
                            href={item.show.officialSite}
                            className="py-2 bg-blue-800 text-white outline-none w-full rounded-b-xl"
                          >
                            Click
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="grid gap-y-6">
        <Accordion>
          <Accordion.Item className="border-none">
            <Accordion.Header className="w-[70vw] m-auto">
              Football
            </Accordion.Header>
            <Accordion.Body className="grid gap-y-2 grid-cols-1 justify-evenly sm:grid-cols-1 gap-x-4 md:grid-cols-2 gap-x-6 lg:grid-cols-3 gap-x-6">
              {sportdata
                .filter((_, index) => index === 0 || index === 1 || index === 2)
                .map((item, index) => (
                  <div key={index}>
                    <div className=" ">
                      <h3 className="text-center font-bold mb-2">
                        {item.show.type}
                      </h3>
                      <div className="flex flex-col justify-between border-2 border-solid border-blue-500  pt-6 rounded-2xl text-center w-auto sm:h-[540px]">
                        <div className="px-2">
                          <h3 className="text-center font-bold mb-2">
                            {item.show.name}
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.show.summary,
                            }}
                            className="text-xs"
                          ></p>
                        </div>
                        <div className="mt-2">
                          <button
                            href={item.show.officialSite}
                            className="py-2 bg-blue-800 text-white outline-none w-full rounded-b-xl"
                          >
                            Click
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="grid gap-y-6">
        <Accordion>
          <Accordion.Item className="border-none">
            <Accordion.Header className="w-[70vw] m-auto">
              Houses
            </Accordion.Header>
            <Accordion.Body className="grid gap-y-2 grid-cols-1 justify-evenly sm:grid-cols-1 gap-x-4 md:grid-cols-2 gap-x-6 lg:grid-cols-3 gap-x-6">
              {housedata
                .filter((_, index) => index === 0 || index === 1 || index === 2)
                .map((item, index) => (
                  <div key={index}>
                    <div className=" ">
                      <h3 className="text-center font-bold mb-2">
                        {item.show.type}
                      </h3>
                      <div className="flex flex-col justify-between border-2 border-solid border-blue-500  pt-6 rounded-2xl text-center w-auto sm:h-[540px]">
                        <div className="px-2">
                          <h3 className="text-center font-bold mb-2">
                            {item.show.name}
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.show.summary,
                            }}
                            className="text-xs"
                          ></p>
                        </div>
                        <div className="mt-2">
                          <button
                            href={item.show.officialSite}
                            className="py-2 bg-blue-800 text-white outline-none w-full rounded-b-xl"
                          >
                            Click
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
