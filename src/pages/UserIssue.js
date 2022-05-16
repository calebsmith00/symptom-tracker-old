import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function UserIssue() {
    const { userId, issueId } = useParams();
    const [issue, setIssue] = useState({});

    useEffect(() => {
        const issues = JSON.parse(sessionStorage.getItem('issues'))
        if (!issues) return

        issues.map(issue => {
            if (issue.name === issueId) setIssue(issue)
        })
    }, [])

    return (
        <>
            <p>Your symptoms: </p>
            {
                issue.symptoms &&
                issue.symptoms.map((symptom, index) => {
                    return <p key={index}>{symptom}</p>
                })}
        </>
    )
}