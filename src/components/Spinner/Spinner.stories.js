import React from 'react';
import Button from '../Button/Button';
import Spinner from './Spinner';

export default {
  title: 'BBVA/Spinner',
  component: Spinner,
};

const BACKGROUNDS = {
  light: '#FFFFFF',
  medium: '#F4F4F4',
  dark: '#1973B8',
  navy: '#072146',
};

const Template = (args) => {
  const { theme } = args;
  const backgroundColor = BACKGROUNDS[theme];

  return (
    <div style={{ padding: '20px 20px', backgroundColor }}>
      <div>¡Contenido detras del spinner!</div>
      <Button label="Button" type="button" />
      <Spinner {...args} />
    </div>
  );
};

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  title: 'Estamos validando tu recibo',
  subtitle: 'El proceso puede tardar unos segundos.¡No actualices esta pantalla!',
  size: 'large',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'navy',
  title: 'Estamos validando tu recibo',
  subtitle: 'El proceso puede tardar unos segundos.¡No actualides esta pantalla!',
  size: 'medium',
};
