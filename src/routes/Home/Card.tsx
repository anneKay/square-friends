import React from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

const Card: React.FC<Props> = () => {
  // const [count, setCount] = useState<TextNode>({ text: "hello" });
  // const inputRef = useRef<HTMLInputElement>(null);
  // const divRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <input />
    </div>
  );
};

export default Card;
