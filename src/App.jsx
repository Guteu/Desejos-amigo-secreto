import './App.css'
import PresentBox from './components/present/PresentBox'
import Header from './components/header/Header'

import pix01 from './assets/pix.png'
import pix02 from './assets/pix2.png'
import pix03 from './assets/pix3.jpg'
import chuteira from './assets/chuteiraFutsal.png'
import chuteira02 from './assets/chuteira2.jpg'
import mouseGamer from './assets/mouseGamer.jpg'
import mouseGamer02 from './assets/mouse2.webp'
import camisaProgramador from './assets/camisaProgramador.png'
import camisaProgramador02 from './assets/camisaProgramador2.webp'
import camisaProgramador03 from './assets/camisaProgramador3.webp'
import bolaFutsal from './assets/bolaFutsal.png'
import bolaFutsal02 from './assets/bolaFutsal2.jpg'
import usbHub from './assets/usbHub.webp'
import usbHub02 from './assets/usbHubRuim.png'
import microfone from './assets/microfone.webp'
import microfone02 from './assets/microfone2.webp'


function App() {

	let presentPix = [
		pix03,
		pix01,
		pix02
	]
	let presentChuteira = [
		chuteira02,
		chuteira
	]
	let presentMouseGamer = [
		mouseGamer,
		mouseGamer02
	]
	let presentCamisaProgramador = [
		camisaProgramador,
		camisaProgramador02,
		camisaProgramador03
	]
	let presentBolaFutsal = [
		bolaFutsal,
		bolaFutsal02
	]
	let presentUsbHub = [
		usbHub02,
		usbHub
	]
	let presentMicrofone = [
		microfone,
		microfone02
	]

	return (
		<>
			<Header />
			<main>
				<PresentBox name="Pix" imgURL={pix01} whereToFind="no seu app do banco" details="O amigo secreto é de 50 reais, mas lembre-se que o céu é o limite. Minha chave pix é meu email: danielguerra1711@gmail.com" images={presentPix} />
				<PresentBox name="Chuteira de Futsal" imgURL={chuteira02} whereToFind="Tanto online quanto em loja fisica, como a umbro e a nike" details="Eu calço 39-40. As chuteiras de futsal da umbro são as melhores" images={presentChuteira} />
				<PresentBox name="Mouse Gamer" imgURL={mouseGamer02} whereToFind="loja online como kabum, amazon e mercado livre" details="eu não me importo com o led no mouse, mas esses botões laterais são bem legais" images={presentMouseGamer} />
				<PresentBox name="Camisa de Programação" imgURL={camisaProgramador} whereToFind="loja online" details="O tamanho das minhas camisas é M. Se não conseguir achar o da imagem tudo bem, mas eu quero uma preta, porque a minha branca suja muito facil, se tiver while (alive) ou while (!dead) na camisa, não pode ter repeat" images={presentCamisaProgramador} />
				<PresentBox name="Bola de Futsal" imgURL={bolaFutsal} whereToFind="loja online ou fisica, como adidas, nike, penalty ou decathlon" details="Prefiro bola de futsal mas eu aceito de futebol tambem, e eu não quero a bola mini" images={presentBolaFutsal} />
				<PresentBox name="USB hub de qualidade" imgURL={usbHub} whereToFind="loja online tipo mercado livre e a amazon" details="USB hub barato é ruim e dura menos de um mês, então não compre os de 15 reais porque só vão durar 15 dias" images={presentUsbHub} />
				<PresentBox name="Microfone de mesa USB" imgURL={microfone} whereToFind="loja online tipo mercado livre e a amazon" details="O microfone tem que ser USB, porque eu uso notebook" images={presentMicrofone} />
			</main>
			
		</>
	)
}

export default App
