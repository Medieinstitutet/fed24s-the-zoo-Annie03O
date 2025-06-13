import { Nav } from "./Nav"
import "../style/Header.css"

export const Header = () => {
    return (
        <header>
            <div className="logo">The Zoo</div>
            <Nav/>
        </header>
    )
}