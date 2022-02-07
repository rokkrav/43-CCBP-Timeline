import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  height: 100vh;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #171f46;
  font-size: 18px;
  font-weight: 500;
  line-height: 2.7;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const MainHeading = styled.span`
  font-family: 'Roboto';
  color: #2b237c;
  font-size: 24px;
  font-weight: 700;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
