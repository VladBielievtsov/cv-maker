
import { FaFilePdf } from "react-icons/fa6";
import Title from './Title';
import Education from "./Education";
import Experience from "./Experience";

export default function Form() {

  return (
    <form className='bg-white w-full rounded-lg shadow-md py-6 px-10 space-y-4'>
      <Title>Personal information</Title>
      <div className='grid grid-cols-2 gap-6'>
        <div>
          <input placeholder="Full Name" className='input' />
        </div>
        <div>
          <input placeholder="Position (Front-end, etc.)" className='input' />
        </div>
        <div>
          <input placeholder="Phone Number" className='input' />
        </div>
        <div>
          <input placeholder="Address" className='input' />
        </div>
        <div>
          <input placeholder="Email Address" className='input' />
        </div>
        <div>
          <input placeholder="Github Username" className='input' />
        </div>
      </div>
      <Title>Summary</Title>
      <div>
        <input placeholder="Summary" className='input' />
      </div>
      <Title>Hobby</Title>
      <div>
        <input placeholder="coding, sleep" className='input' />
      </div>
      <Title>Skills</Title>
      <div>
        <input placeholder="javascript, react, go" className='input' />
      </div>
      <Title>Education</Title>
      <Education />
      <Title>Experience</Title>
      <Experience />

      <div className='flex justify-center'>
        <button className="btn"><FaFilePdf /> <span>Download</span></button>
      </div>
    </form>
  )
}
