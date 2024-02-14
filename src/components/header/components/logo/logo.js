import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const LargeText = styled.div`
	font-size: 32px;
	font-weight: 600;
	line-height: 40px;
`;

const SmallText = styled.div`
	font-size: 22px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-superpowers" size="62px" margin="0 10px 0 0" />
		<div>
			<LargeText>Личный блог</LargeText>
			<SmallText>Сергея Комарова</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
`;
