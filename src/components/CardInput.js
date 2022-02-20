import styled, { css } from "styled-components";

const Input = styled.input`
  width: 200px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid var(--gray);
  outline: none;
  padding-left: 10px;

  ${({ iconSide }) =>
    iconSide === "left" &&
    css`
      padding-left: 40px;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--disabled-back);
      border: 1px solid var(--disabled-border);
    `}

  ${({ state }) =>
    state === "hover" &&
    css`&:hover {
      border: solid 1px var(--normal);`}

  ${({ state }) =>
    state === "focus" &&
    css`
      &:focus {
        border: solid 1px var(--focus);
      }
    `}

    ${({ state, err }) =>
    state === "focus" && err
      ? css`
          &:focus {
            border: solid 1px var(--error);
          }
        `
      : ""}

    ${({ state }) =>
    state === "error" &&
    css`
      border: solid 1px var(--error);
    `}

    ${({ defaultValue }) =>
    defaultValue &&
    css`
      color: var(--normal);
      font-weight: bold;
    `}

    ${({ size }) =>
    size === "sm" &&
    css`
      width: 200px;
      height: 40px;
    `}

    ${({ size }) =>
    size === "md" &&
    css`
      width: 200px;
      height: 56px;
    `}

    ${({ size }) =>
    size === "full" &&
    css`
      width: 100%;
    `}

    ${({ color }) =>
    color &&
    css`
      border: solid 3px ${color};
    `}
`;

const TextArea = styled.textarea`
  width: 200px;
  resize: none;
  padding: 20px 10px;
  border-radius: 8px;
`;

export default function CardInput({
  type,
  handleFocus,
  labelName,
  err,
  disabled,
  iconSide,
  value,
  size,
  multiline,
  color,
}) {
  let state = type.state;

  return (
    <>
      {multiline && (
        <TextArea
          placeholder="Placeholder"
          cols="20"
          rows={multiline}
          wrap="hard"
          maxLength={24 * multiline}
        ></TextArea>
      )}

      {!multiline && (
        <Input
          type="text"
          id={labelName}
          className="card__input"
          name="normal_input"
          placeholder="Placeholder"
          state={state}
          err={err}
          disabled={disabled}
          iconSide={iconSide}
          onFocus={() =>
            err ? handleFocus("#d32f2f") : handleFocus("#2962ff")
          }
          defaultValue={value ? "Text" : ""}
          size={size}
          color={color}
        />
      )}
    </>
  );
}
