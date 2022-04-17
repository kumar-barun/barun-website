import styled from "styled-components";

const StyledSideP = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  padding-left: var(--code-base-left-padding);
`;

export default function Layout({ children, h1, sub = null }) {
  return (
    <div className="content">
      <div className="left">
        <h1>{h1}</h1>
        {sub && <StyledSideP>{sub}</StyledSideP>}
      </div>
      <div className="right">{children}</div>
    </div>
  );
}
