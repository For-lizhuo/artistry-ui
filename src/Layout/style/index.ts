import styled from 'styled-components';

export const LayoutStyle = styled.div<{ hasSider: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.hasSider ? 'row' : 'column')};
`;
export const HeaderStyle = styled.div``;
export const SiderStyle = styled.div``;
export const ContentStyle = styled.div``;
export const FooterStyle = styled.div``;
