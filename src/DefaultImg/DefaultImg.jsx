import DefaultJpeg from './defaultImg.jpeg';
import { StyledDefaultImg } from './DefaultImgStyled';

export const DefaultImg = () => {
  return <StyledDefaultImg src={DefaultJpeg} alt="error" />;
};
