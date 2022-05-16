import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SymptomTracker.scss'
import Symptoms from './Symptoms'

export function completeSymptom(symptom) {
    const symptomLength = symptom.length - 1

    if (symptom[symptomLength] !== ',') return false
    return symptom.substring(0, symptomLength)
}

export default function Issues() {
    const [inProgress, setInProgress] = useState(false)
    const [issue, setIssue] = useState({
        issueName: "",
        issueSymptom: ""
    })

    useEffect(() => {
        if (!completeSymptom(issue.issueSymptom)) return
        setIssue({
            ...issue,
            issueSymptom: ""
        })
    }, [issue])


    const handleChange = e => {
        const id = e.target.id
        const value = e.target.value

        setIssue({
            ...issue,
            [id]: value
        })
    }

    return (
        <div className="issues">
            {!inProgress &&
                <Button variant="outline-primary" onClick={() => setInProgress(true)}>Create New Issue</Button>}

            {inProgress &&
                <Form>
                    <Form.Group className="mb-3" controlId="issueName">
                        <Form.Label>What would you like to track this issue as?</Form.Label>
                        <Form.Control type="text" placeholder="For example: diabetes" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="issueSymptom">
                        <Form.Label>Enter your symptoms and separate them by a comma.</Form.Label>
                        <Form.Control type="text" placeholder="For example: nausea, headache, fatigue" onChange={handleChange} value={issue.issueSymptom} />
                    </Form.Group>

                    <Symptoms symptom={issue.issueSymptom} />

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            }
        </div>
    )
}