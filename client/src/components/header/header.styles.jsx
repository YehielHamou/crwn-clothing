import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70vw;
  padding: 18px;
  margin-left: 14px;
`;

export const OptionsConstainer = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 100;
  margin-right: 16px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
