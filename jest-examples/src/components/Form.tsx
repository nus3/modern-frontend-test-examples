import { type FormEvent, useState, type FC } from "react";

export type FormProps = {
  onSubmit: (name: string) => void;
};

export const Form: FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={handleChange} />
      <button type="submit">送信</button>
    </form>
  );
};
