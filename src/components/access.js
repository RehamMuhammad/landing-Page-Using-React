import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Access() {
  return (
    <div class="container d-lg-block">
      <div class="row">
        <div class="col-md-4 col-12 me-5 "></div>

        <div style={{ position: "relative" }}>
          <div
            class="card shadow p-5 pb-2 me-5"
            style={{
              backgroundColor: "#1c2230",
              position: "absolute",
              bottom: "90%",
              left: "12%",
            }}
          >
            <div class="container mb-5">
              <div class="row text-center">
                <div class="col-12 mb-2">
                  <h2>Get early access today</h2>
                  <br />
                  <p>
                    It only takes a minute to sign up and our free starter tier
                    is extremely generous. If you have any
                    <br />
                    questions, our support team would be happy to help you.
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-8 col-12">
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control rounded-pill"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <p
                    style={{
                      color: "red",
                      marginTop: "-15px",
                      marginLeft: "20px",
                    }}
                  >
                    Please enter a valid email addres
                  </p>
                </div>
                <div class="col-md-4 col-12">
                  <div class="mb-3">
                    <button
                      style={{ color: "#fff" }}
                      type="button"
                      class="btn btn-info rounded-pill fs-5 text-center col-12"
                    >
                      Get started for free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  );
}

export default Access;
