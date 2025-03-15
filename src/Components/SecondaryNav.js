import React from 'react'

function SecondaryNav() {
  return (
    <div>
        <div className="conta iner caregoryctre-css">
        <header className="d-flex flex-wrap align-items-center justify-content-center py-1 mb-4">
          <ul className="nav d-flex flex-row flex-wrap  justify-content-center gap-2">
            <li>
              <a href="/" className="btn btn-sm px-4 btn-outline-secondary  rounded-pill">
              Kitchen 
              </a>
            </li>
            <li>
              <a href="/" className="btn btn-sm px-4 btn-outline-secondary rounded-pill">
              Bathroom 
              </a>
            </li>
            <li>
              <a href="/" className="btn px-4  btn-sm btn-outline-secondary rounded-pill">
              Laundry 
              </a>
            </li>
            <li>
              <a href="/" className="btn px-4  btn-sm btn-outline-secondary rounded-pill">
              Floor 
              </a>
            </li>
            <li>
              <a href="/" className="btn px-4  btn-sm btn-outline-secondary rounded-pill">
              All-Purpose
              </a>
            </li>
            <li>
              <a href="/" className="btn px-4  btn-sm btn-outline-secondary rounded-pill">
              Specialty 
              </a>
            </li>
            <li>
              <a href="/" className="btn px-4 btn-sm btn-outline-secondary rounded-pill">
              Glass
              </a>
            </li>
            <li>
              <a href="/" className="btn px-4 btn-sm btn-outline-secondary rounded-pill">
              Disinfectants
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  )
}

export default SecondaryNav
