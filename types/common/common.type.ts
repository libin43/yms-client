// types/InputBox.types.ts
type InputBoxProps = {
    name: string;
    type: string;
    value: string;
    style?: string;
    onChange: (value: string) => void;
  };
export default InputBoxProps;