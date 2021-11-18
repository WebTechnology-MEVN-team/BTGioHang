import React from 'react';

export default (props) =>
  <tbody className="thead-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">Tổng Tiền</th>
      <th scope="col">{props.cartCount.cartTotal},000đ</th>
      <th scope="col">{props.cartCount.cartItemCount} sản phẩm</th>
    </tr>
  </tbody>
