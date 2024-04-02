import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

interface IEducation {
  id: string;
  institution: string;
  qualification: string;
  date: string;
}

export default function Education() {
  const [education, setEducation] = useState<IEducation[]>([{
    id: uuidv4(),
    institution: "",
    qualification: "",
    date: ""
  }])
  const educationFields = ['institution', 'qualification', 'date'];

  const addEducationField = () => {
    setEducation([...education, {
      id: uuidv4(),
      institution: "",
      qualification: "",
      date: ""
    }])
  }

  const removeEducationField = (id: string) => {
    const newEducations = education.filter(c => c.id !== id)
    setEducation(newEducations)
  }

  const handleEducationChange = (id: string, field: string, value: string) => {
    const updated = education.map(e => {
      if (e.id === id) {
        return {
          ...e,
          [field]: value
        }
      }
      return e
    })
    setEducation(updated)
  }
  return (
    <div>
      {
        education.map(e => (
          <div key={e.id} className="flex items-center space-x-6">
            <div className="grid grid-cols-3 gap-6">
              {educationFields.map((field, id) => (
                <input key={id} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className='input' onChange={(ev) => handleEducationChange(e.id, field, ev.target.value)} />
              ))}
            </div>
            <button type="button" onClick={() => removeEducationField(e.id)} className="btn bg-maroon hover:bg-maroon/70 p-0 w-8 h-8 justify-center text-black"><AiFillDelete /></button>
          </div>
        ))
      }
      <div className="flex justify-center pt-4">
        <button type="button" onClick={addEducationField} className="btn p-0 w-10 h-10 justify-center"><FaPlus /></button>
      </div>
    </div>
  )
}
