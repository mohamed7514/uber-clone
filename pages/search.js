import { useState } from "react"
import tw from "tailwind-styled-components"
import Link from 'next/link'
const Search = () => {

const [pickup,setPickup] =useState("")
const [dropoff,setDropoff]=useState("")


  return (
<Wrapper>

  <ButtonContainer>
    <Link href="/">
    <BackButton src="https:/img.icons8.com/ios-filled/50/000000/left.png" />
    </Link>
  </ButtonContainer>
  <InputContainer>
    <FromToIcons>
         <Circle src='https:/img.icons8.com/ios/50/9CA3AF/filled-circle.png' />
         <Line src='https:/img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
         <Square src='https:/img.icons8.com/windows/50/000000/square-full.png' />

    </FromToIcons>
    <InputBoxes>
    <Input placeholder='Enter pickup location'
    value={pickup}
    onChange={(e)=>setPickup(e.target.value)}
    />
    <Input placeholder='Where to'
    value={dropoff}
    onChange={(e)=>setDropoff(e.target.value)}
    />
    </InputBoxes>
    <PlusIcon src='https:/img.icons8.com/ios/50/000000/plus-math.png'/>
  </InputContainer>
  <SavedPlaces>
    
    <StarIcon  src="data:image/png;base64,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"/>
      SavedPlaces
  </SavedPlaces>
    <Link href={{pathname:"/confirm",query:{
      pickup:pickup,
      dropoff:dropoff
    }
      }}>
  <ConfirmationButtonContainer>
   Confirm Location
  </ConfirmationButtonContainer>
  </Link>
</Wrapper>

)
}

export default Search


const Wrapper = tw.div `
bg-gray-200 h-screen

`

const ButtonContainer = tw.div `
bg-white px-4
`

const BackButton = tw.img`
h-12 cursor-pointer
`

const FromToIcons = tw.div`

w-10 flex flex-col mr-2 items-center
 
`

const InputContainer =tw.div`
bg-white flex items-center px-4 mb-2
`

const Circle = tw.img`
h-2.5
`


const Line = tw.img`
h-10
`


const Square = tw.img`
h-3
`
const InputBoxes =tw.div`
flex flex-col flex-1

`

const Input =tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none 
`
const PlusIcon =tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3

`

const SavedPlaces =tw.div`
flex items-center bg-white px-4 py-2
` 

const StarIcon =tw.img`

bg-gray-400 w-10 h-10 rounded-full mr-2

`

const ConfirmationButtonContainer =tw.div`

bg-black  text-white text-center   mt-2 mx-4 py-3 text-2xl cursor-pointer

` 
