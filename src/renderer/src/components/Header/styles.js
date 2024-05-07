import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
  -webkit-app-region: drag;

  background-color: #17141f;

  border-bottom: 1px solid #5f596e;
`

export const SectionNav1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 2rem;
  gap: 1rem;

  flex-wrap: nowrap;
`

export const SectionNav2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2rem;
  gap: 2rem;
`

export const P = styled.p`
  color: #c1bfc7;
  font-weight: 400;

  text-align: center;
  display: flex;
  align-items: center;

  gap: 0.6rem;
  cursor: pointer;
`

export const Space = styled.div`
  color: #797486;
`
