import React from 'react'
import './Order.css'

const Order = () => {
  return (
    <div className='order'>
        <div className='order-container'>
            <div className='head'>
                <h1>Orders</h1>
            </div>
            <table className='order-table'>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Buyer</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>
                     <img className='order-img' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    </td>
                    <td>Stunning concept art</td>
                    <td>59.<sup>99</sup></td>
                    <td>Maria Anders</td>
                    <td>
                        <img className='msg-logo' src='./img/message.png' alt='' />
                    </td>
                </tr>
                <tr>
                    <td>
                     <img className='order-img' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    </td>
                    <td>Ai generated concept art</td>
                    <td>79.<sup>99</sup></td>
                    <td>Francisco Chang</td>
                    <td>
                    <img className='msg-logo' src='./img/message.png' alt='' />
                    </td>
                </tr>
                <tr>
                    <td>
                     <img className='order-img' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    </td>
                    <td>High quality digital character</td>
                    <td>110.<sup>99</sup></td>
                    <td>Roland Mendel</td>
                    <td>
                    <img className='msg-logo' src='./img/message.png' alt='' />
                    </td>
                </tr>
                <tr>
                    <td>
                     <img className='order-img' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    </td>
                    <td>Illustration hyper realistic painting</td>
                    <td>39.<sup>99</sup></td>
                    <td>Helen Bennett</td>
                    <td>
                    <img className='msg-logo' src='./img/message.png' alt='' />
                    </td>
                </tr>
                <tr>
                    <td>
                     <img className='order-img' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    </td>
                    <td>Original ai generated digital art</td>
                    <td>119.<sup>99</sup></td>
                    <td>Yoshi Tannamuri</td>
                    <td>
                    <img className='msg-logo' src='./img/message.png' alt='' />
                    </td>
                </tr>
                <tr>
                    <td>
                     <img className='order-img' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    </td>
                    <td>Text based ai generated art</td>
                    <td>49.<sup>99</sup></td>
                    <td>Giovanni Rovelli</td>
                    <td>
                    <img className='msg-logo' src='./img/message.png' alt='' />
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Order