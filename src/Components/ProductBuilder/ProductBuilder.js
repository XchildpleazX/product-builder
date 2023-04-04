import React, {useState, useEffect} from 'react';
import Accordion from '../Accordion/Accordion';
import LivePreview from '../LivePreview/LivePreview';
import Select from '../Select/Select';
import PreviewImage from '../../Images/noodle-board.png';
import Input from '../Input/Input';
import Text from '../Text/Text';
import Image from '../Image/Image';
import Pricing from '../Pricing/Pricing';
import html2canvas from 'html2canvas';
import './ProductBuilder.css';

export default function ProductBuilder() {
  const [engravingImage, setEngravingImage] = useState('')
  const [engravingText, setEngravingText] = useState('');
  const [fontFamily, setFontFamily] = useState('');
  const [fontSize, setFontSize] = useState(0);
  const [imageSize, setImageSize] = useState('');
  const [cost, setCost] = useState(0);
  const [wood, setWood] = useState('');
  const [product, setProduct] = useState('');
  const pricingChart = {
    products: {
      CharcuterieBoard: 80,
      NoodleBoard: 110,
      Table: 400
    },
    woodType: {
      Walnut: 0,
      Cherry: 10,
      WhiteOak: 10,
    },
    engraving: {
      Small: 10,
      Medium: 20,
      Large: 30
    }
  }
  useEffect(() => {
    
 }, [product, wood, engravingImage, engravingText]);
  useEffect(() => {
    var productCost = 0;
    switch(true) {
      case fontSize <= 33:
        productCost += 20;
        break;
      case fontSize > 34 && fontSize < 66:
        productCost += 30;
        break;
      case fontSize >= 67:
        productCost += 40;
        break;
    }
    setCost(productCost);
 }, [fontSize]);

 useEffect(() => {
  var productCost = 0;
  switch(true) {
    case imageSize <= 33:
      productCost += 20;
      break;
    case imageSize >= 34 && imageSize <= 66:
      productCost += 30;
      break;
    case imageSize >= 67:
      productCost += 40;
      break;
  }
  setCost(productCost);
}, [imageSize]);
 
function screenShot() {
  html2canvas(document.querySelector("#livePreview")).then(canvas => {
    document.body.appendChild(canvas)
});
}

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
    <div>
    <div className='ProductBuilder-Grid'>
      <div className='ProductBuilder-Grid-Accordion'>
        <Accordion
          title='Product Details'
        >
          <Select
            label='Product Type:'
            options={['None', 'Charcuterie Board', 'Noodle Board', 'Table']}
            onChange={e => setProduct(e.target.value)}
          />
          <Select
            label='Wood Type:'
            options={['None', 'Cherry', 'White Oak', 'Walnut']}
            onChange={e => setWood(e.target.value)}
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
        </LivePreview>
      </div>
      <Pricing
        cost={cost}
        product={product}
        wood={wood}
        engravingImage={engravingImage}
        engravingText={engravingText}
      />
    </div>
    <button onClick={() => screenShot()}>Capture Image</button>
    <a href='mailto:clands.web@gmail.com'>Mail to</a>
    </div>
  );
}
