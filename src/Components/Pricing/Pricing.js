import React from 'react';

export default function Pricing({
    cost,
    product,
    wood,
    engravingImage,
    engravingText
})
{
    return (
    <div className='ProductBuilder-Grid-Price'>
        <div className='ProductBuilder-Grid-Price-Container'>
          <h3>Price Estimate:</h3> 
          <span className='ProductBuilder-Grid-Price-Infographic'>$ {cost}.00</span>
        </div>
        
        <h4>Specifications:</h4>
        <ul>
          <li>{product ? 'Product:' + product : ''}</li>
          <li>{wood ? 'Wood:' + wood : ''}</li>
          <li>{engravingImage ? 'Engraving image: '+engravingImage.substring(0,15) : ''}</li>
          <li>{engravingText ? 'Engraving text: '+engravingText : ''}</li>
        </ul>
        <div className='ProductBuilder-Grid-Price-Total'>
            Total: ${cost ? cost + cost*0.07 : '0'}
        </div>
      </div>
    );
}