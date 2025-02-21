const MyBody = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <aside className="col col-2">
            <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
              <div className="container flex-column align-items-start">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <ul>
                      <li>
                        <a className="nav-item nav-link d-flex align-items-center" href="#">
                          <i className="bi bi-house-door-fill"></i>&nbsp; Home
                        </a>
                      </li>
                      <li>
                        <a className="nav-item nav-link d-flex align-items-center" href="#">
                          <i className="bi bi-book-fill"></i>&nbsp; Your Library
                        </a>
                      </li>
                      <li>
                        <div className="input-group mt-3">
                          <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nav-btn">
                <button className="btn signup-btn" type="button">
                  Sign Up
                </button>
                <button className="btn login-btn" type="button">
                  Login
                </button>
                <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
              </div>
            </nav>
          </aside>

          <main className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row h-100">
          <div className="col-lg-10 offset-lg-2">
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/prev.png" alt="prev" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/play.png" alt="play" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/next.png" alt="next" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyBody;
