import styled from '@emotion/styled';

export const SummaryContainer = styled.div`
  display: none;
  width: 213px;
  height: 266px;
  overflow: hidden;
  border-radius: 20px 20px 20px 0;
  text-transform: uppercase;
  background-color: #f5f6fb;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    transform: translate(30px, 318px);
  }
  @media screen and (min-width: 1280px){
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
     transform: translate(853px, 268px);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  border-bottom: 2px solid #ffffff;
`;
export const SummaryTable = styled.table`
  background-color: #f5f6fb;
  border-collapse: collapse;
  width: 100%;
`;
export const TableTbody = styled.tbody`
  border-left: none;
`;
export const MonthTd = styled.tbody`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;
export const ValueTd = styled.tbody`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  /* padding-left: 20px; */
`;
export const TableTr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  border-bottom: 2px solid #ffffff;
  height: 38px;
  text-align: left;
`;