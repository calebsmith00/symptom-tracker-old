import './SymptomTracker.scss'
import { useState } from 'react'
import Issues from './Issues'
import MasterList from './MasterList'

export default function Tracker() {
    const [viewmode, setViewmode] = useState(<Issues />)

    const changeViewmode = e => {
        e.preventDefault()

        const propertyName = e.target.name
        if (propertyName === "master") return setViewmode(<MasterList />)

        return setViewmode(<Issues />)
    }

    return (
        <div className="tracker">
            <div className="tracker-select">
                <button name="master" onClick={changeViewmode}>Master List</button>
                <button name="issues" onClick={changeViewmode}>List By Issues</button>
            </div>

            {viewmode}
        </div>
    )
}