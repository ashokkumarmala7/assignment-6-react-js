import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 80%;
  border-radius: solid;
  background-color: #ffffff;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2px;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: #ffffff;
  border-radius: 10px;
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  color: 223a5f;
  font-size: 20px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
