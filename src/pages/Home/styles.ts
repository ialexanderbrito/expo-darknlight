import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.textColor};
  font-size: 32px;
`;
