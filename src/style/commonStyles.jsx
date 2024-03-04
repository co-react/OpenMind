import { css } from "styled-components";

const BoxShadow1 = css`
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
`;

const BoxShadow2 = css`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const BoxShadow3 = css`
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
`;

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BUTTON_STYLE = {
  fill: {
    defaultColor: "var(--Grayscale-10)",
    backgroundColor: "var(--Brown-40)",
    activeBackgroundColor: "var(--Brown-50)",
    activeBoxShadowColor: "var(--Brown-50)",
    hover: "var(--Brown-50)",
    disabledColor: "var(--Grayscale-10)",
    disabledBackgroundColor: "var(--Brown-30)",
    disabledBoxShadow: "var(--Brown-30)",
  },
  outline: {
    defaultColor: "var(--Brown-40)",
    backgroundColor: "var(--Brown-10)",
    activeBackgroundColor: "var(--Brown-20)",
    activeBoxShadowColor: "var(--Brown-40)",
    hover: "var(--Brown-40)",
    disabledColor: "var(--Brown-30)",
    disabledBackgroundColor: "var(--Brown-10)",
    disabledBoxShadow: "var(--Brown-30)",
  },
};

export { BoxShadow1, BoxShadow2, BoxShadow3, FlexCenter, BUTTON_STYLE };
