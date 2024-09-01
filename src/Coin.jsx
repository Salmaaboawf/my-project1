import React, { useState } from 'react';
import head from '../public/assets/images (5).jpeg';
import tail from '../public/assets/images (6).jpeg';

function Coin() {
  const [h_count, SetHeadCount] = useState(0);
  const [T_count, SetTailCount] = useState(0);
  const [t_flip, SetTotalFlip] = useState(0);
  const [src, setSrc] = useState(head);

  function Flip() {
    const isHead = Math.random() < 0.5;
    if (isHead) {
      SetHeadCount(h_count + 1);
      setSrc(head);
    } else {
      SetTailCount(T_count + 1);
      setSrc(tail);
    }
    SetTotalFlip(t_flip + 1);
  }

  return (
    <div>
      <img src={src} alt="Coin" />
      <button onClick={Flip}>Flip</button>
      <h1>Heads: {h_count}</h1>
      <h1>Tails: {T_count}</h1>
      <h1>Total Flips: {t_flip}</h1>
    </div>
  );
}

export default Coin;
