import React from "react";
import {
  TouchableOpacity,
  Text,
  type TouchableOpacityProps,
} from "react-native";
import tw from "twrnc";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  outline,
  ...props
}) => {
  const buttonStyle = outline ? tw`border-2 border-black` : tw`border-none`;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
