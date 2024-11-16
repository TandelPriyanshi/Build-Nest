import React from "react";

const Sidebar = () => {
    return(
        <aside className="sidebar">
          <button className="all-departments">ALL DEPARTMENTS</button>
          <ul className="department-list">
            <li className="department-item"> <a href="/bricksblocks" className="li">Bricks & Blocks</a></li>
            <li className="department-item"> <a href="/cement" className="li">Cement</a></li>
            <li className="department-item"> <a href="/electricalmaterials" className="li">Electrical Materials</a></li>
            <li className="department-item"> <a href="/naturalstones" className="li">Natural Stones</a></li>
            <li className="department-item"> <a href="/paintsfinishes" className="li">Paints & Finishes</a></li>
            <li className="department-item"> <a href="/plumbing" className="li">Plumbing</a></li>
            <li className="department-item"> <a href="/sandaggregates" className="li">Sand & Aggregates</a></li>
            <li className="department-item"> <a href="/tiles" className="li">Tiles</a></li>
            <li className="department-item"> <a href="/tmtsteel" className="li">TMT Steel Bars</a></li>
            <li className="department-item"> <a href="/woodenproducts" className="li">Wooden Products</a></li>
          </ul>
        </aside>
    );
}

export default Sidebar;