import React from 'react'
import './AddNewGig.css'

const AddNewGig = () => {
  return (
    <div className='add'>
        <div className='add-container'>
        <h1>Add New Gig</h1>
        <div className='sections'>
             <div className='info1'>
                <label htmlFor=''>Title</label>
                <input type='text' placeholder="e.g. I will do something I'm really good at" />
                <label htmlFor=''>Category</label>
                <select>
                    <option value='design'>Design</option>
                    <option value='web development'>Web Development</option>
                    <option value='animation'>Animation</option>
                    <option value='music'>Music</option>
                </select>
                <label htmlFor=''>Cover Image</label>
                <input type='file' />
                <label htmlFor=''>Upload Images</label>
                <input type='file' />
                <label htmlFor=''>Description</label>
                <textarea name='' id='' placeholder='Brief descriptions to introduce your service to customers' cols='30' rows='30' ></textarea>
                <button>Create</button>
             </div>
             <div className='info2'>
                <label htmlFor=''>Service Title</label>
                <input type='text' placeholder='e.g. One-page web design' />
                <label htmlFor=''>Short Description</label>
                <textarea name='' id='' placeholder='Short description of your service' cols='30' rows='10' ></textarea>
                <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
                <input type='number' />
                <label htmlFor=''>Revision Number</label>
                <input type='number' />
                <label htmlFor=''>Add Features</label>
                <input type='text' placeholder='e.g. page design' />
                <input type='text' placeholder='e.g. file uploading' />
                <input type='text' placeholder='e.g. setting up a domain' />
                <input type='text' placeholder='e.g. hosting' />
                <label htmlFor=''>Price</label>
                <input type='number' />
             </div>
        </div>
        </div>
    </div>
  )
}

export default AddNewGig