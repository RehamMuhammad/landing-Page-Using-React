import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <nav class="container">
      <div class="row mt-5 mb-5">
        <div class="col-md-2 col-4">
          <a href="#">
            <img
              class="d-inline-block"
              src="images/logo.svg"
              alt="access anywhere"
            />
          </a>
        </div>

        <div class="col-md-6 col-1"></div>

        <div class="col-md-4 col-7">
          <ul class="mb-2 mb-lg-0 mt-2">
            <li>
              <a class="me-3" aria-current="page" href="#">
                Features
              </a>
              <i class="fas fa-shopping-cart text-light"></i>
            </li>
            <li>
              <a class="me-3" href="#">
                Team
              </a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
