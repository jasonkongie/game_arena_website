import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Board( {title = "LeaderBoard", columnnames = ["User Name", "Skill Strength"]}) {
    const [sortOrder, setSortOrder] = useState("descending"); // State to track sort order
    const [searchQuery, setSearchQuery] = useState("");

    // Toggle sorting order
    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === "ascending" ? "descending" : "ascending"));
    };

    // Handle changes to the search input
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredLeaderboard = between(Leaderboard, sortOrder, searchQuery)

  return (
    <div className="board">
        <h1 className='leaderboard'>{title}</h1>

          {/* Search Input */}
          <input
              type="text"
              placeholder={`Filter ${columnnames[0]}...`}
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
          />

          {/* Column Headers */}
          <div className="columnnames">
              <div className="column-item objectname">{columnnames[0]}</div>

              {/* Second column with sorting functionality */}
              <div className="column-item skill-strength">
                  {columnnames[1]}
                  <button onClick={toggleSortOrder} className="sort-button">
                      {sortOrder === "ascending" ? "↑" : "↓"}
                  </button>
              </div>
          </div>

          {/* Scrollable Profile Rows */}
          <div className="profiles-container">
              <Profiles Leaderboard={filteredLeaderboard} />
          </div>

          {/* Row Count Display */}
          <div className="row-count">
              {`${filteredLeaderboard.length} of ${Leaderboard.length} row(s) selected`}
          </div>

    </div>
  )
}



function between(data, sortOrder, searchQuery){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        const matchesSearch = val.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if (sortOrder === 'ascending') {
            return a.score - b.score; // Ascending order
        } else {
            return b.score - a.score; // Descending order
        }
    })

}
