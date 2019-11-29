import styled from 'styled-components'

import Logo from '../../assets/images/logo.png'

export const Container = styled.View`
  background: #141419;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`

export const Image = styled.Image.attrs({
  source: Logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`
export const AmountContainer = styled.View``

export const Amount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: white;
  font-size: 12px;
  border-radius: 9px;
`
