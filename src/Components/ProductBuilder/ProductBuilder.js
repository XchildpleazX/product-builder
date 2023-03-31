import React, {useState, useEffect} from 'react';
import Accordion from '../Accordion/Accordion';
import LivePreview from '../LivePreview/LivePreview';
import Select from '../Select/Select';
import PreviewImage from '../../Images/noodle-board.png';
import Input from '../Input/Input';
import Text from '../Text/Text';
import Image from '../Image/Image';
import html2canvas from 'html2canvas';
import './ProductBuilder.css';

export default function ProductBuilder() {
  const [wood, setPreviewWood] = useState('');
  const [engravingImage, setEngravingImage] = useState('')
  const [engravingText, setEngravingText] = useState('');
  const [fontFamily, setFontFamily] = useState('');
  const [fontSize, setFontSize] = useState(0);
  const [imageSize, setImageSize] = useState('');
  const [cost, setCost] = useState(0);
  const woodType = ['Cherry', 'White Oak', 'Walnut'];

  useEffect(() => {
    var productCost = 0;
    switch(fontFamily) {
      case 'Gothic':
        productCost += 2;
    }
    switch(fontSize) {
      case fontSize > 0:
        alert('test');
      case fontSize < 50:
        productCost +=20;
      case fontSize > 50 && fontSize < 75:
        productCost += 30;
      case fontSize >= 75:
        productCost += 40;
    }
    setCost(productCost);
 }, [fontFamily, fontSize]);

 function readFile() {

  window.takeScreenShot = function() {
    html2canvas(document.getElementById('livePreview'), {
        onrendered: function (canvas) {
            document.body.appendChild(canvas);
        },
        width:320,
        height:220
    });
}
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  if (file) {
    reader.readAsDataURL(file);
  } else {
    setEngravingImage("");
  }

  reader.onloadend = function () {
    setEngravingImage(reader.result);
  }
 }
 
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
            onChange={e => readFile()}
          />
          <Input
            label='Engraving Image Size:'
            type='range'
            onChange={e => setImageSize(e.target.value)}
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
      <div className='ProductBuilder-Grid-Preview' id='livePreview'>
        <LivePreview>
          <img id='productImg' src={PreviewImage}></img>
          {engravingText ? (
            <Text fontFamily={fontFamily} fontSize={fontSize} value={engravingText} />
            ) : ''}
          {engravingImage ? (
            <Image imageSize={imageSize} path={engravingImage} />
            ) : ''}
          {cost ? (
            <div>{cost}</div>
          ) : ''}
        </LivePreview>
      </div>
    </div>
  );
}
