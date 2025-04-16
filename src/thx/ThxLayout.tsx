import { Typography } from '@alfalab/core-components/typography';
import heart from '../assets/heart.png';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  return (
      <>
        <div className={thxSt.container}>
          <img src={heart} width={280} height={280} className={thxSt.rocket} />
          <Typography.TitleResponsive style={{ margin: '24px 0 12px' }} font="system" tag="h1" view="medium" weight="semibold">
            Alfa Only
          </Typography.TitleResponsive>
          <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
            Для подключения свяжитесь
            с персональным менеджером
          </Typography.Text>
        </div>
      </>
  );
};
