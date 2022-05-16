import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function IssueList({ issues }) {
    return (
        <div>
            {issues.length > 0 &&
                issues.map(issue => {
                    return (
                        <NavLink to={`/user/1/issue/${issue.name}`} key={issue.name}>{issue.name}</NavLink>
                    )
                })
            }
        </div>
    )
}