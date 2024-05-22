import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  BoxProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle';

import {Box} from '../Box';
import {Text} from '../Text';
import {Theme} from '../../../theme/theme';

type Props = BoxProps<Theme> &
  VariantProps<Theme, 'buttonVariants', 'buttonVariants'> &
  VariantProps<Theme, 'textVariants', 'textVariants'> & {
    onPress: () => void;
    label?: string;
    icon?: ReactNode;
  };

const buttonVariants = createVariant<Theme, 'buttonVariants'>({
  themeKey: 'buttonVariants',
});

const Card = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([buttonVariants], Box);

const Button = ({
  onPress,
  label,
  textVariants,
  buttonVariants = 'primary',
  icon,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card
        width={'auto'}
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        variant={buttonVariants}
        {...rest}>
        {icon && icon}
        {label && (
          <Text variant={textVariants} color="buttonPrimaryText">
            {label}
          </Text>
        )}
      </Card>
    </TouchableOpacity>
  );
};

export default Button;
