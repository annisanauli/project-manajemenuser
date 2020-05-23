import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MANAJEMEN AKUN</li>
                    <li>
                        <a href="pages/akunsaya.html">
                        <i className="fa fa-th" /> <span>Kelola Akun Saya</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/kelolauser.html">
                        <i className="fa fa-th" /> <span>Kelola User</span>
                        </a>
                    </li>
                    <li className="header">NAVIGASI UTAMA</li>
                    <li>
                        <a href="pages/menu.html">
                        <i className="fa fa-th" /> <span>Menu</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/stock.html">
                        <i className="fa fa-th" /> <span>Stock</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/UoM.html">
                        <i className="fa fa-th" /> <span>UoM</span>
                        </a>
                    </li>
                    </ul>
                </section>
                {/* /.sidebar */}
                </aside>

            </div>
        )
    }
}
