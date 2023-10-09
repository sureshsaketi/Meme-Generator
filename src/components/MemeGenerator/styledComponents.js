// Style your components here
import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`

export const HeadingFormImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MemeGeneratorHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

export const ImageAndFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 250px;
  width: 300px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 24px;
  @media screen and (min-width: 576px) {
    height: 250px;
  }
  @media screen and (min-width: 768px) {
    order: 2;
    width: 400px;
    height: 250px;
  }
`

export const ImageText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
  font-weight: 600;
  text-align: center;
`

export const MemeGeneratorFormContainer = styled.form``

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const LabelElement = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 14px;
  margin-bottom: 5px;
`
export const InputElement = styled.input`
  width: 300px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #d7dfe9;
  color: #5a7184;
  padding-left: 10px;
  outline: none;
  font-family: 'Open Sans';
`
export const FontSizeSelector = styled.select`
  width: 300px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #d7dfe9;
  color: #5a7184;
  padding-left: 10px;
  outline: none;
  font-family: 'Open Sans';
`
export const GenerateButton = styled.button`
  height: 28px;
  width: 100px;
  color: #ffffffff;
  background-color: #0b69ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
`
