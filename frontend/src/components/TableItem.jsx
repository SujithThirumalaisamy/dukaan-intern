import React from 'react'

export default function TableItem({data}) {
    const {orderId,orderDate,orderAmount, transactionFee} = data
  return (
    <tr className='table-item'>
        <td className="ti orderID">{orderId}</td>
        <td className="ti orderDate">{orderDate}</td>
        <td className="ti orderAmount">{orderAmount}</td>
        <td className="ti trans-fee">{transactionFee}</td>
    </tr>
  )
}
