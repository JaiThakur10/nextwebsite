import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
    return (  
        <>
        <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin="anonymous"
  />
  {/* Font Awesome */}
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
    crossOrigin="anonymous"
  />
  {/* Style CSS */}
  <link rel="stylesheet" href="style.css" />
  <title>College Library</title>
</>

  <section className="header Hback">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        {/*<a class="navbar-brand ml-4" href="#"><img src="assets/logos/Logo Vibe.png" alt="vibe Library" class="logo-img"></a>*/}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="./donate-book.html" className="nav-link">
                Donate Books
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 nospace">
            <input
              className="form-control mr-sm-2 searchbar"
              id="searchTxt"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  </section>
  <div className="background" />
  <div id="message" />
  <div className="container my-3 heading">
    <h1>College Library</h1>
    <h5>
      <a
        href=""
        style={{ color: "black" }}
        className="typewrite"
        data-period={2000}
        data-type='[ "“If you don’t like to read, you haven’t found the right book.” – J.K. Rowling", "“That’s the thing about books. They let you travel without moving your feet.” – Jhumpa Lahiri", "“There is more treasure in books than in all the pirate’s loot on Treasure Island.” – Walt Disney", "“Some of these things are true and some of them lies. But they are all good stories.” – Hilary Mantel" ]'
      >
        <span className="wrap" />
      </a>
    </h5>
    <hr />
    <form id="libraryForm">
      <div className="form-group row">
        <label htmlFor="bookName" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="input-box"
            id="bookName"
            placeholder="Book Name"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="Author" className="col-sm-2 col-form-label">
          Author
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="input-box"
            id="author"
            placeholder="Author"
          />
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Category</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <select className="form-check-input" name="type" id="type">
                <option value="N/A">Select Category</option>
                <option value="Arts & Music">Arts &amp; Music</option>
                <option value="Biographies">Biographies</option>
                <option value="Business">Business</option>
                <option value="Comics">Comics</option>
                <option value="Computer & Tech">Computers &amp; Tech</option>
                <option value="Cooking">Cooking</option>
                <option value="Education & Reference">
                  Education &amp; Reference
                </option>
                <option value="Entertainment">Entertainment</option>
                <option value="Health & Fitness">Health &amp; Fitness</option>
                <option value="History">History</option>
                <option value="Hobbies & Crafts">Hobbies &amp; Crafts</option>
                <option value="Home & Garden">Home &amp; Garden</option>
                <option value="Horror">Horror</option>
                <option value="Kids">Kids</option>
                <option value="Literature & Fiction">
                  Literature &amp; Fiction
                </option>
                <option value="Medical">Medical</option>
                <option value="Mystery">Mystery</option>
                <option value="Parenting">Parenting</option>
                <option value="Religion">Religion</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi & Fantasy">Sci-Fi &amp; Fantasy</option>
                <option value="Science & Maths">Science &amp; Maths</option>
                <option value="Self-Help">Self-Help</option>
                <option value="Social Sciences">Social Sciences</option>
                <option value="Sports">Sports</option>
                <option value="Travel">Travel</option>
                <option value="True Crime">True Crime</option>
              </select>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </div>
      </div>
    </form>
    <div id="table">
      <h1>Your books</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Type</th>
            <th scope="col">Category</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody id="tableBody" />
      </table>
    </div>
  </div>
  <div>{/* jQuery first, then Popper.js, then Bootstrap JS */}</div>
</>

    )
}