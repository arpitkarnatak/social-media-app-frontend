import styled, { css } from "styled-components";

export const FontBase = styled.div`
  color: ${(props) => props.color || "var(--dark, #000)"};
  font-feature-settings: "liga" off;
  font-family: VT323;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const fontBaseCss = css`
  font-feature-settings: "liga" off;
  font-family: VT323;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Title36 = styled(FontBase)`
  font-weight: 700;
  font-size: 36px;
`;

export const Title32 = styled(FontBase)`
  font-weight: 700;
  font-size: 32px;
`;

export const Title24 = styled(FontBase)`
  font-size: 24px;
`;

export const Title20 = styled(FontBase)`
  font-size: 20px;
`;

export const BodySM = styled(FontBase)`
  font-size: 16px;
`;

export const BodyXS = styled(FontBase)`
  font-size: 12px;
`;
