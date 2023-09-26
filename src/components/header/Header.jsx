import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import Navbar from "../navbar/Navbar";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {

    const navigate = useNavigate();
    const [destination, setDestination] = useState("");
    const [openDateRange, setOpenDateRange] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [options, setOptions] = useState({
        adult: 2,
        children: 0,
        room: 1,
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation == 'i' ? prev[name] + 1 : prev[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })
    }

    return (
        <div className="header">
            <div className="headerContainer">
                <Navbar />
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Attractions</span>
                    </div>
                </div>

                <h1 className="headerTitle">Attractions, activities and experiences</h1>
                <p className="headerDesc">
                    Discover new attractions and experiences to match your interests and travel style with amazing discounts !
                </p>
                <button className="headerBtn">Sign in / Register</button>

                {type != "list" && <div className="headerSearch">
                    <span className="headerSearchTitle">Filters : </span>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Where are you going ? "
                            className="headerSearchInput"
                            onChange={e => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="headerIcon"
                        />
                        <span
                            className="headerSearchText"
                            onClick={() => setOpenDateRange(!openDateRange)}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDateRange && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="dateRange"
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption('adult', 'd')} >-</button>
                                    <span>{`${options.adult}`}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption('children', 'd')}>-</button>
                                    <span>{`${options.children}`}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption('room', 'd')}>-</button>
                                    <span>{`${options.room}`}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>+</button>
                                </div>
                            </div>

                            <button className="optionBtn" onClick={() => setOpenOptions(false)}>Done</button>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Header