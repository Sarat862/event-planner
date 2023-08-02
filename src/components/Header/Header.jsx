import base from "../../helpers/container.module.css";
import css from "./header.module.css";

function Header() {
  return (
    <header className={css.header}>
        <div className={base.container}>
            <a href="/" className={css.logo}>Event Planner</a>
            <button type="button" className={css.language_btn}>UK</button>
            <input type="text" placeholder="Search by keywords" className={css.input_search}/>
        </div>
    </header>
  )
}

export default Header