import {Component} from 'react'

import {
  MemeGeneratorContainer,
  HeadingFormImageContainer,
  MemeGeneratorHeading,
  ImageAndFormContainer,
  ImageContainer,
  ImageText,
  MemeGeneratorFormContainer,
  InputContainer,
  LabelElement,
  InputElement,
  FontSizeSelector,
  GenerateButton,
} from './styledComponents'

// const urls = ['https://wallpaperaccess.com/full/240159.jpg', 'https://assets.ccbp.in/frontend/react-js/nature-img.png']

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    isSubmitted: false,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-img.png',
    topText: '',
    bottomText: '',
    fontSize: parseInt(fontSizesOptionsList[0].displayText),
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  renderImageContainer = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <ImageContainer imageUrl={imageUrl} data-testid="meme">
        <ImageText fontSize={fontSize}>{topText}</ImageText>
        <ImageText fontSize={fontSize}>{bottomText}</ImageText>
      </ImageContainer>
    )
  }

  renderImageUrlInputField = () => (
    <InputContainer onChange={this.onChangeImageUrl}>
      <LabelElement htmlFor="imageUrl">Image URL</LabelElement>
      <InputElement id="imageUrl" placeholder="Image url" />
    </InputContainer>
  )

  renderTopTextInputFiled = () => (
    <InputContainer
      onChange={event => {
        this.setState({topText: event.target.value})
      }}
    >
      <LabelElement htmlFor="topText">Top Text</LabelElement>
      <InputElement id="topText" placeholder="Top text" />
    </InputContainer>
  )

  renderBottomTextInputField = () => (
    <InputContainer
      onChange={event => {
        this.setState({bottomText: event.target.value})
      }}
    >
      <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
      <InputElement id="bottomText" placeholder="Top text" />
    </InputContainer>
  )

  renderFontSizeSelectorField = () => (
    <InputContainer>
      <LabelElement htmlFor="selectElement">Font Size</LabelElement>
      <FontSizeSelector
        id="selectElement"
        onChange={event => {
          this.setState({fontSize: parseInt(event.target.value)})
        }}
      >
        {fontSizesOptionsList.map(eachOption => (
          <option key={eachOption.optionId} value={eachOption.optionId}>
            {eachOption.displayText}
          </option>
        ))}
      </FontSizeSelector>
    </InputContainer>
  )

  renderGenerateButton = () => <GenerateButton>Generate</GenerateButton>

  submitFormDetails = event => {
    event.preventDefault()
    this.setState({isSubmitted: true})
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <MemeGeneratorContainer>
        <HeadingFormImageContainer>
          <MemeGeneratorHeading>Meme Generator</MemeGeneratorHeading>
          <ImageAndFormContainer>
            {isSubmitted ? this.renderImageContainer() : null}

            <MemeGeneratorFormContainer onSubmit={this.submitFormDetails}>
              {this.renderImageUrlInputField()}
              {this.renderTopTextInputFiled()}
              {this.renderBottomTextInputField()}
              {this.renderFontSizeSelectorField()}
              {this.renderGenerateButton()}
            </MemeGeneratorFormContainer>
          </ImageAndFormContainer>
        </HeadingFormImageContainer>
      </MemeGeneratorContainer>
    )
  }
}
export default MemeGenerator
