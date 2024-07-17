import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (

    <>
      <header>
        <div className="left__header">Border</div>
        <div className="right__header">
            <ul>
                <li>Вакансии</li>
                <li>FAQ</li>
                <li>Контакты</li>
            </ul>
        </div>
      </header>
      <Outlet>

      </Outlet>
      <footer>

      </footer>
    </>
  )
}

export default Layout
