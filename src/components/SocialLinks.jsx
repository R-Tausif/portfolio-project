import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
// import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    // const links = [
    //     {
    //         id:1,
    //         child: ()
    //     }
    // ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        {/* unordered list */}
        <ul> 
            {/* list item element */}
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600'>
                {/* anchor link element, we use to create hyperlink element */}
                <a href='www.google.com' className='flex justify-between items-center w-full text-white'>
                    {/* <></> are React fragments to group multiple elements without adding extra node to the DOM */}
                    <>
                    LinkedIn <FaLinkedin size={30}/> 
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks