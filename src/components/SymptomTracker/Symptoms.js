import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useEffect, useState } from 'react'
import { completeSymptom } from './Issues'

export default function Symptoms({ symptom }) {
    const [symptoms, setSymptoms] = useState([])

    useEffect(() => {
        if (!completeSymptom(symptom)) return

        setSymptoms([
            ...symptoms,
            symptom.substring(0, symptom.length - 1)
        ])
    }, [symptoms, symptom])

    const updateSymptomName = e => {
        const id = e.target.id
        const value = e.target.value

        let newSymptoms =
            symptoms
                .map((symptom, index) => {
                    if (index === id.toString()) return value
                    if (index === id.toString() && value === "") return ""
                    return symptom
                })
                .filter((symptom, index) => {
                    if (symptom === "") return false
                    return true
                })


        setSymptoms(newSymptoms)
    }

    return (
        <div className="symptom-list mb-3">
            {(symptoms.length > 0) && <p>You have listed the following symptoms: {symptoms.length}</p>}

            {symptoms.map((symptom, index) => {
                return (
                    <InputGroup key={index} id={index} >
                        <InputGroup.Checkbox id={index} aria-label="Checkbox for symptom text input" />
                        <FormControl id={index} aria-label="Text input with checkbox" value={symptom} onChange={updateSymptomName} />
                    </InputGroup>
                )
            })}
        </div>
    )
}