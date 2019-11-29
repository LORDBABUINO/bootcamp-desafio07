import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Image, AmountContainer, Amount } from './styles'

export default function Header() {
  return (
    <Container>
      <Image />
      <AmountContainer>
        <Icon name="shopping-basket" size={25} color="white" />
        <Amount>3</Amount>
      </AmountContainer>
    </Container>
  )
}
