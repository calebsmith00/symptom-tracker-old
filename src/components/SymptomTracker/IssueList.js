import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function IssueList({ issues }) {
    return (
        <div className="issue-list">
            {issues.length > 0 &&
                issues.map(issue => {
                    return (
                        <div className="d-grid gap-2">
                            <Button className="mt-3" variant="outline-primary">
                                <Link to={`/user/1/issue/${issue.name}`} key={issue.name}>
                                    {issue.name}
                                </Link>
                            </Button>

                        </div>
                    )
                })
            }
        </div>
    )
}