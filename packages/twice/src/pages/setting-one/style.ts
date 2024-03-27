import styled, { css, keyframes } from 'styled-components';
import { Button as AntdBtn } from 'antd';

export const Box = styled.div`
  width: 50%;
  padding: 10px;
`;

export const Button = styled.span`
  background-color: #ccc;
  text-align: center;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 4px;
  display: block;
  margin: 5px 0;
`;

/**样式继承 */
export const AddTextBtn = styled(Button)`
  background-color: #333;
  color: #fff;
`;
interface ColorWithOpenProps {
  open?: boolean;
}

export const ColorWithOpen = styled.span<ColorWithOpenProps>`
  color: ${(props) => (props.open ? 'green' : '#000')};
`;

export const MixinCss = css`
  background-color: #ccc;
  border-radius: 4px;
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

/**混入 */
export const Item = styled.div`
  ${MixinCss}
`;

export const CustomBtn = styled(AntdBtn).attrs({ type: 'primary' })``;

/**动画 */
const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

/**动画 */
export const AnimationBox = styled.div`
  animation: ${animation} 2s linear infinite;
`;
