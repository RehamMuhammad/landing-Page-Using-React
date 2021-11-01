import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Hero() {
  return (
    <div
      class="container text-center mt-5 mb-5"
      style={{
        backgroundImage: 'url("./images/bg-curvy-desktop.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div class="row">
        <div class="col-12">
          <img
            src="images/illustration-intro.png"
            alt="intro"
            class="img-fluid"
          />
          <h3 class="mb-4 mt-5">
            All your files in one secure location, <br /> accessible anywhere.
          </h3>
          <p>
            Fylo stores all your most important files in one secure location.
            <br />
            Access them wherever you need, share and collaborate with
            <br />
            friends family, and co-workers.
          </p>
          <button
            style={{ color: "#fff" }}
            type="button"
            class="btn btn-info rounded-pill fs-4 text-center p-1 px-5 mt-3"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
