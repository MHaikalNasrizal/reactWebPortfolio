import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../scss/custom.scss";

export default function Home() {
  return (
    <>
      <div className="cover-container text-center d-flex vw-100 h-100 p-3 flex-column">
        <main className="px-4">
          <h1>Cover your page.</h1>
          <p className="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p className="lead">
            <a
              href="#"
              className="btn btn-lg btn-light fw-bold border-white bg-white"
            >
              Learn more
            </a>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>
            Cover template for{" "}
            <a href="https://getbootstrap.com/" className="text-white">
              Bootstrap
            </a>
            , by{" "}
            <a href="https://twitter.com/mdo" className="text-white">
              @mdo
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
