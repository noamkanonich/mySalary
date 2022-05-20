import { Pressable, View, Text } from 'react-native'
import React from 'react'
import styled, {css} from "styled-components/native";


interface IButton {
    label: string;
    color?: string;
    background?: string;
    onPress: (value?:string | number) => void
}

const Button = ({label, color, background, onPress}: IButton) => {
  return (
    <Root background={background}>
      <Pressable onPress={onPress}>
          <Label color={color}>{label}</Label>
      </Pressable>
    </Root>
  )
}

const Root = styled.View<{background?:string}>`
 ${({background}: {background: string}) => 
    background && css`
        background-color: ${background};
        padding: 10px 20px
        border-radius: 8px;
    `
}
`

const Label = styled.Text<{color?:string}>`
font-size: 16px;
font-weight: bold;
align-self: center;
margin-vertical: 4px;
${({color}: {color: string}) => 
color && css`
    color: ${color};
`}
`



export default Button