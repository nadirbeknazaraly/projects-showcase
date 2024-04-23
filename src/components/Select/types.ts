interface OptionProps {
  text: string;
  value: string;
}

export interface SelectProps {
  id: string;
  label: string;
  value?: string;
  options: OptionProps[];
  onChange: (value: string) => void;
}
