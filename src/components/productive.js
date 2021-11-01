import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../index.css";

function Productive() {
  return (
    <div class="container mt-5 mb-5">
      <div class="row mb-5">
        <div class="col-md-6 col-12">
          <img
            src="images/illustration-stay-productive.png"
            alt="access anywhere"
            class="img-fluid"
          />
        </div>
        <div class="col-md-6 col-12 d-md-flex flex-column justify-content-center mt-5 text-xs-center ps-2">
          <h1>
            Stay productive,
            <br /> wherever you are
          </h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you
            <br /> covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live
            <br /> collaboration. No email attachments required.
          </p>
          <p class="show">
            <a style={{ lineHeight: "1" }} href="#">
              See how Fylo works
            </a>
            &nbsp;&nbsp;
            <div
              class="rounded-circle d-inline-block border border-3 text-center pb-1"
              style={{
                width: "30px",
                backgroundColor: "aqua",
                borderColor: "aqua",
                color: "#000",
              }}
            >
              &rarr;
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Productive;
