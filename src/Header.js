import React, { Component } from 'react'
import './Header.css';
import GitHubLogo from '.\\GitHub-Mark-32px.png';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark blue-bg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand text-adjust-bg" href="#">Luke DeGoes</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link header-click" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown adjust-dd">
                            <a className="nav-link dropdown-toggle" nohref id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item text-adjust-dd header-click" href="#">Project 1</a>
                                <a class="dropdown-item text-adjust-dd header-click" href="#">Project 2</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-adjust-dd" href="https://github.com/LukeCD12"><img className="github-img" src={GitHubLogo} alt="GitHub Logo"/>    Github</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
