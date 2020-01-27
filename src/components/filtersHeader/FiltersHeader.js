import React from "react";
import filter from "../../assets/images/filter.svg";
import Collapsible from "react-collapsible";
import Media from "react-media";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// collapsible menu button
const trigger = (
  <div style={{ display: "flex" }}>
    <img className="sHeader__filters--img" src={filter} alt="filter" />
    <p className="sHeader__filters--text">filter</p>
  </div>
);

const options = [
  { opt: "", text: "All" },
  { opt: "video", text: "Video" },
  { opt: "channel", text: "Channel" }
];
const optionsArray = ["All", "Video", "Channel"];

const FiltersHeader = ({ numberOfResults, smallScreen, onAddFilter }) => {
  const choose = option => {
    if (option) {
      onAddFilter(smallScreen, option.label);
    }
  };

  return (
    // Only show filters after initial search
    numberOfResults !== null && (
      <div className="sHeader__filters">
        {/* conditional rendering according to media queries */}
        <Media
          queries={{
            small: "(max-width: 700px)",
            medium: "(min-width: 701px)"
          }}
        >
          {matches => (
            <>
              {matches.medium && (
                <div>
                  <Collapsible trigger={trigger}>
                    <div className="controller">
                      <span className="controller__title">TYPE</span>
                      <ul className="controller__controllers">
                        {options.map(opt => (
                          <li
                            key={opt.opt}
                            onClick={e => onAddFilter(e, smallScreen, opt.opt)}
                          >
                            {opt.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Collapsible>
                </div>
              )}
              <span className="sHeader__filters--results">{`About ${numberOfResults} filtered results`}</span>
              {matches.small && (
                <form>
                  {/* TODO: not working, event not firing properly */}
                  <Dropdown
                    options={optionsArray}
                    onChange={choose}
                    value={optionsArray[0]}
                  />
                </form>
              )}
            </>
          )}
        </Media>
      </div>
    )
  );
};

export default FiltersHeader;
