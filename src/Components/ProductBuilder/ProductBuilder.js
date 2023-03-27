import React, {useState, useEffect} from 'react';
import Accordion from '../Accordion/Accordion';
import LivePreview from '../LivePreview/LivePreview';
import Select from '../Select/Select';
import PreviewImage from '../../Images/noodle-board.png';
import Input from '../Input/Input';
import Draggable from '../Draggable/Draggable';
import Text from '../Text/Text';
import Image from '../Image/Image';
import './ProductBuilder.css';

export default function ProductBuilder() {
  const [wood, setPreviewWood] = useState('');
  const [engravingImage, setEngravingImage] = useState('')
  const [engravingText, setEngravingText] = useState('');
  const [fontFamily, setFontFamily] = useState('');
  const [fontSize, setFontSize] = useState('');
  const woodType = ['Cherry', 'White Oak', 'Walnut'];

  useEffect(() => {
    //
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
          <Input
            label='Engraving Image:'
            type='file'
            onChange={e => console.log(e.files[0])}
          />
          <Input
            label='Engraving Image Size:'
            type='range'
          />
          <Input
            label='Engraving Text:'
            type='input'
            onChange={e => setEngravingText(e.target.value)}
          />
          <Input
            label='Engraving Font Size:'
            type='range'
            onChange={e => setFontSize(e.target.value)}
          />
          <Select
            label='Engraving Font Style:'
            options={['Times New Roman', 'Sans-Serif', 'Gothic']}
            onChange={e => setFontFamily(e.target.value)}
          />
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
          <Draggable>
            <Text fontFamily={fontFamily} fontSize={fontSize}>
              {engravingText}
            </Text>
          </Draggable>
          <Draggable>
            image:
            {engravingImage}
          </Draggable>
        </LivePreview>
      </div>
    </div>
  );
}
