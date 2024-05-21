import logoa from '../../assets/icon/avatar2.png';
import { Button } from 'semantic-ui-react';
import './MenuFooter.scss';

const MenuFooter = () => {
  return (
    <div className="MenuFooter">
      <Button size="big" circular icon="facebook" />

      <Button size="big" circular icon="facebook" />

      <Button size="big" circular icon="twitter" />

      <Button size="big" circular icon="linkedin" />

      <Button size="big" circular icon="google plus" />

      <Button size="big" circular icon={logoa} />
    </div>
  );
};

export default MenuFooter;
