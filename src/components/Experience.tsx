import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

interface IExperience {
  id: string;
  company: string;
  position: string;
  date: string;
}

export default function Experience() {
  const [experience, setExperience] = useState<IExperience[]>([{
    id: uuidv4(),
    company: "",
    position: "",
    date: ""
  }])
  const experienceFields = ['company', 'position', 'date'];

  const addExperienceField = () => {
    setExperience([...experience, {
      id: uuidv4(),
      company: "",
      position: "",
      date: ""
    }])
  }

  const removeExperienceField = (id: string) => {
    const newExperience = experience.filter(c => c.id !== id)
    setExperience(newExperience)
  }

  const handleExperienceChange = (id: string, field: string, value: string) => {
    const updated = experience.map(e => {
      if (e.id === id) {
        return {
          ...e,
          [field]: value
        }
      }
      return e
    })
    setExperience(updated)
  }
  return (
    <div>
      {
        experience.map(e => (
          <div key={e.id} className="flex items-center space-x-6">
            <div className="grid grid-cols-3 gap-6">
              {experienceFields.map((field, id) => (
                <input key={id} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className='input' onChange={(ev) => handleExperienceChange(e.id, field, ev.target.value)} />
              ))}
            </div>
            <button type="button" onClick={() => removeExperienceField(e.id)} className="btn bg-maroon hover:bg-maroon/70 p-0 w-8 h-8 justify-center text-black"><AiFillDelete /></button>
          </div>
        ))
      }
      <div className="flex justify-center pt-4">
        <button type="button" onClick={addExperienceField} className="btn p-0 w-10 h-10 justify-center"><FaPlus /></button>
      </div>
    </div>
  )
}
