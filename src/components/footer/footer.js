import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperatute, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Yoshkar-Ola&units=metric&lang=ru&appid=82f9bd3f276987ae1abb75a3177428e3',
		)
			.then((result) => result.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>
				<div>Личный блог Сергея Комарова</div>
				<div>serg.komarov@gmail.com</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</div>
				<div>
					{temperatute} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	font-weight: bold;
	box-shadow: 0 -5px 10px #148fb8;
	baground-color: #fff;
`;
