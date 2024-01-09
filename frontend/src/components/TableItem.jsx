import React from 'react'

export default function TableItem({data}) {
    const {orderId,orderDate,orderAmount, transactionFee} = data
  return (
    <>
    <div className='table-item'>
        <div className="ti orderID">{orderId}</div>
        <div className="ti orderDate">{orderDate}</div>
        <div className="ti orderAmount">{orderAmount}</div>
        <div className="ti trans-fee">{transactionFee}</div>
    </div>
    <div className="divider"></div>
    </>
  )
}
