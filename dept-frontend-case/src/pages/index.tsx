import React from 'react';
import NavBar from 'components/NavBar/NavBar';
import ClientCard from 'components/ClientCard/ClientCard';
import Hero from 'components/Hero/Hero';
import ClientQuote from 'components/ClientQuote/ClientQuote';
import ClientList from 'components/ClientList/ClientList';
import Form from 'components/Form/Form';
import Footer from 'components/Footer/Footer';
import ClientNote from 'components/ClientNote/ClientNote';
import Filter from 'components/Filter/Filter';
import 'styles/index.scss';

const index = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<Filter />
			<ClientCard />
			<ClientNote />
			<ClientQuote />
			<ClientList />
			<Form />
			<Footer />
		</div>
	);
};

export default index;
