import styled from 'styled-components'

export const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1e1a29;

  border-left: 1px solid #17141f;
  border-right: 1px solid #5f596e;

  padding-left: 2rem;
`

export const LeftBotton = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`

export const DivLogin = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 0rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`
export const DivSearch = styled.div`
  width: 100%;
  padding: 2rem 0 2rem 0rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`

export const InputSeach = styled.input`
  width: 100%;
  color: #c1bfc7;
  height: 100%;
  border: none;
  background-color: #1e1a29;

  font-weight: 400;
`
export const P = styled.p`
  color: #c1bfc7;
  font-weight: 400;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;

  text-align: start;

  cursor: pointer;
`
