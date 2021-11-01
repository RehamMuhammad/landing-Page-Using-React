import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Testimonials() {
  return (
    <div
      class="container mt-5 mb-5"
      style={{ minHeight: "600px", paddingBottom: "600px" }}
    >
      {/* <img src="images/bg-quotes.png" alt="quotes" /> */}
      <div
        class="row mb-5 mt-5 ms-1"
        style={{
          backgroundImage: 'url("images/bg-quotes.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 3%",
          marginTop: "-5%",
        }}
      >
        <div class="col-md-4 col-12 mt-5">
          <div class="card shadow" style={{ backgroundColor: "#1c2230" }}>
            <div class="card-body">
              <div class="row">
                <p class="mb-4 pt-4 ps-4">
                  Fylo has improved our team productivity by
                  <br /> an order of magnitude. Since making the
                  <br /> switch our team has become a well-oiled
                  <br /> collaboration machine.
                </p>
              </div>
              <div class="row">
                <div class="col-3">
                  <img
                    src="images/profile-1.jpg"
                    alt="first-Profile"
                    class="img-fluid rounded-circle col-12 col-md-10"
                  />
                </div>
                <div class="col-9">
                  <h6 class="mb-1">Satish Patel</h6>
                  <p class="fs-6 fw-light">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12 mt-5">
          <div class="card shadow" style={{ backgroundColor: "#1c2230" }}>
            <div class="card-body">
              <div class="row">
                <p class="mb-4 pt-4 ps-4">
                  Fylo has improved our team productivity by
                  <br /> an order of magnitude. Since making the
                  <br /> switch our team has become a well-oiled
                  <br /> collaboration machine.
                </p>
              </div>
              <div class="row">
                <div class="col-3">
                  <img
                    src="images/profile-2.jpg"
                    alt="first-Profile"
                    class="img-fluid rounded-circle col-12 col-md-10"
                  />
                </div>
                <div class="col-9">
                  <h6 class="mb-1">Satish Patel</h6>
                  <p class="fs-6 fw-light">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12 mt-5">
          <div class="card shadow" style={{ backgroundColor: "#1c2230" }}>
            <div class="card-body">
              <div class="row">
                <p class="mb-4 pt-4 ps-4">
                  Fylo has improved our team productivity by
                  <br /> an order of magnitude. Since making the
                  <br /> switch our team has become a well-oiled
                  <br /> collaboration machine.
                </p>
              </div>
              <div class="row">
                <div class="col-3">
                  <img
                    src="images/profile-3.jpg"
                    alt="first-Profile"
                    class="img-fluid rounded-circle col-12 col-md-10"
                  />
                </div>
                <div class="col-9">
                  <h6 class="mb-1">Satish Patel</h6>
                  <p class="fs-6 fw-light">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
