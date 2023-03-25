import React, {useState, useEffect} from 'react';
import Accordion from '../Accordion/Accordion';
import LivePreview from '../LivePreview/LivePreview';
import Select from '../Select/Select';
import PreviewImage from '../../Images/sample-board.png';
import './ProductBuilder.css';

export default function ProductBuilder() {
  const [wood, setPreviewWood] = useState('');
  const woodType = ['Cherry', 'White Oak', 'Walnut'];

  useEffect(() => {
    console.log('changed');
 }, [wood]);
  return (
    <div className='ProductBuilder-Grid'>
      <div className='ProductBuilder-Grid-Accordion'>
        <Accordion
          title='Product'
        >
          <Select
            label='Wood Type:'
            options={woodType}
          />
        </Accordion>
        <Accordion
          title='Engraving'
        >
          <label>Engraving Image:</label>
          <input type='file'></input>
          <label>Engraving Size:</label>
          <input type='slider'></input>
        </Accordion>
        <Accordion
          title='Extras'
        >
          <Select
            label='Epoxy:'
            options={['None', 'Blue', 'Red', 'Black']}
          />
          <Select
            label='Live Edge:'
            options={['No', 'Yes']}
          />
        </Accordion>
      </div>
      <div className='ProductBuilder-Grid-Preview'>
        <LivePreview>
          <img src={PreviewImage}></img>
        </LivePreview>
      </div>
    </div>
  );
}
