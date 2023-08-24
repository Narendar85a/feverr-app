import React from 'react'
import './Messages.css'
import { Link } from 'react-router-dom'

const Messages = () => {

    const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                     maxime cum corporis esse aspernatur laborum dolorum? Animi
                    molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
                     nobis praesentium placeat.`;

  return (
    <div className='messages'>
     <div className='messages-container'>
     <div className='msg'>
        <h1>Messages</h1>
     </div>
     
      <table className='messages-table'>
        <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
        </tr>

        <tr className='msg-msg'>
            <td>Charley Sharp</td>
            <td>
                <Link to='/message'  className='msg-link'>
                    {message.substring(0, 100)}...
                </Link>
            </td>
            <td>1 hour ago</td>
            <td>
                <button>Mark as Read</button>
            </td>
        </tr>

        <tr className='msg-msg'>
            <td>John Doe</td>
            <td>
                <Link to='/message' className='msg-link' >
                    {message.substring(0, 100)}...
                </Link>
            </td>
            <td>2 hour ago</td>
            <td>
                <button>Mark as Read</button>
            </td>
        </tr>

        <tr>
            <td>Elinor Good</td>
            <td>
                <Link to='/message' className='msg-link'>
                    {message.substring(0, 100)}...
                </Link>
            </td>
            <td>1 day ago</td>
        </tr>

        <tr>
            <td>Garner David</td>
            <td>
                <Link to='/message' className='msg-link'>
                    {message.substring(0, 100)}...
                </Link>
            </td>
            <td>2 days ago</td>
        </tr>

        <tr>
            <td>Troy Oliver</td>
            <td>
                <Link to='/message' className='msg-link'>
                    {message.substring(0, 100)}...
                </Link>
            </td>
            <td>1 week ago</td>
        </tr>

      </table>
     </div>
    </div>
  )
}

export default Messages