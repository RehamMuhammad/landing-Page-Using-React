import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Features() {
  return (
    <div class="container text-center mt-5 mb-5">
      <div class="row mb-5">
        <div class="col-md-6 col-12 mt-3 ">
          <img src="images/icon-access-anywhere.svg" alt="access anywhere" />
          <br />
          <br />
          <h6>Access your files, anywhere</h6>
          <p class="fs-6 fw-light">
            The ability to use a smartphone, tablet, or computer
            <br />
            to access your account means your files follow you
            <br /> everywhere.
          </p>
        </div>

        <div class="col-md-6 col-12 mt-3">
          <img src="images/icon-security.svg" alt="access anywhere" />
          <br />
          <br />
          <h6>Security you can trust</h6>
          <p class="fs-6 fw-light">
            2-factor authentication and user-controlled encryption are
            <br />
            just a couple of the security features we allow to help
            <br />
            secure your files.
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6 col-12 mt-3">
          <img src="images/icon-collaboration.svg" alt="access anywhere" />
          <br />
          <br />
          <h6>Real-time collaboration</h6>
          <p class="fs-6 fw-light">
            Securely share files and folders with friends, family and
            <br />
            colleagues for live collaboration. No email attachments
            <br /> required.
          </p>
        </div>
        <div class="col-md-6 col-12 mt-3">
          <img src="images/icon-any-file.svg" alt="access anywhere" />
          <br />
          <br />
          <h6>Store any type of file</h6>
          <p class="fs-6 fw-light">
            {" "}
            Whether you're sharing holidays photos or workr
            <br />
            documents, Fylo has you covered allowing for all file
            <br />
            types to be securely stored and shared.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
