import { useLocation } from "react-router-dom"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotelList.css"
import { useState } from "react"
import { DateRange } from "react-date-range"
import { format } from "date-fns"
import SearchItem from "../../components/searchItem/SearchItem"

const HotelList = () => {
  const location = useLocation()
  const [openDateRange, setOpenDateRange] = useState(false)
  const [date, setDate] = useState(location.state.date)
  const [destination, setDestination] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.options)


  console.log(location)
  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsSearchTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="destination">Destination </label>
              <input
                type="text"
                placeholder={destination ? destination : "Where do you want to go ? "}
                onChange={e => setDestination(e.target.value)}
              />
            </div>

            <div className="lsItem">
              <label htmlFor="destination">Check in - Check out </label>
              <span
                onClick={() => setOpenDateRange(!openDateRange)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDateRange && <DateRange
                onChange={item => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
              />}
            </div>

            <div className="lsItem">
              <div className="lsItems">
                <label htmlFor="options">Options : </label>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={0} placeholder={options.adult} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" placeholder={options.children} min={0} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" placeholder={options.room} min={1} />
                </div>
              </div>
            </div>
            <button className="listBtn">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelList