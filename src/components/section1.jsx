import Accordion from "react-bootstrap/Accordion";

export default function Section1() {
  return (
    <div className="px-[15%] py-[50px] text-teal-800 grid">
      <div className="">
        <h1 className="text-center text-teal-800 text-xl mb-8">
          SECTION 1 [15 points]
        </h1>
      </div>
      <div className="">
        <div className="">
          <h3 className="mb-2">Lorem ipsum dolor sit amet.</h3>
          <div className="">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Radio Button Option
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Radio Button Option
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Radio Button Option
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Radio Button Option
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="pb-2 mt-8">Lorem ipsum dolor sit amet.</h3>
          <div className="">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Drop Down Option</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-2">Lorem ipsum dolor sit amet.</h3>
          <div className="">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Radio Button Option
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Radio Button Option
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Radio Button Option
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Radio Button Option
              </label>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-center">
          <button className=" inline-block px-4 py-2 text-white bg-teal-800 rounded outline-none">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
