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
    }, [symptom])

    const updateSymptomName = e => {
        const id = e.target.id
        const value = e.target.value

        let newSymptoms = symptoms.map((symptom, index) => {
            if (index == id) return value
            if (index == id && value === "") return ""
            return symptom
        })

        setSymptoms(newSymptoms)
    }

    return (
        <div className="symptom-list mb-3">
            {symptoms.length > 0 && <p>You have listed the following symptoms:</p>}

            {symptoms.map((symptom, index) => {
                if (symptom === "") return
                return (
                    <span key={index}>
                        <InputGroup id={index} >
                            <InputGroup.Checkbox id={index} aria-label="Checkbox for symptom text input" />
                            <FormControl id={index} aria-label="Text input with checkbox" value={symptom} onChange={updateSymptomName} />

                        </InputGroup>
                    </span>
                )
            })}
        </div>
    )
}