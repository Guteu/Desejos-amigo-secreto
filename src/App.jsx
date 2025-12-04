import './App.css'
import PresentBox from './components/present/PresentBox'
import Header from './components/header/Header'

import pix01 from './assets/pix.png'
import pix02 from './assets/pix2.png'
import pix03 from './assets/pix3.jpg'
import microfone from './assets/microfone.webp'
import microfone02 from './assets/microfone2.webp'
import organizador from './assets/organizador.webp'
import organizador02 from './assets/organizador2.jpg'
import caboMultiportas from './assets/caboMultiportas.jpg'
import caboMultiportas02 from './assets/caboMultiportas2.webp'
import luvaGoleiro from './assets/luvaGoleiro.webp'
import luvaGoleiro02 from './assets/luvaGoleiro2.webp'
import smartWatch from './assets/smartWatch.png'
import smartWatch02 from './assets/smartWatch2.webp'
import smartWatch03 from './assets/smartWatch3.jpg'


function App() {

	let presentPix = [
		pix03,
		pix01,
		pix02
	]
	let presentMicrofone = [
		microfone,
		microfone02
	]

	let presentOrganizador = [
		organizador,
		organizador02
	]

	let presentCaboMultiportas = [
		caboMultiportas,
		caboMultiportas02
	]

	let presentLuvaGoleiro = [
		luvaGoleiro,
		luvaGoleiro02
	]

	let presentSmartWatch = [
		smartWatch,
		smartWatch02,
		smartWatch03
	]

	return (
		<>
			<Header />
			<main>
				<PresentBox name="Pix" imgURL={pix01} whereToFind="no seu app do banco" details="O amigo secreto é de 50 reais, mas lembre-se que o céu é o limite. Minha chave pix é meu email: danielguerra1711@gmail.com" images={presentPix} />

				<PresentBox name="Microfone de mesa USB" imgURL={microfone} whereToFind="lojas online tipo mercado livre e amazon ou lojas fisicas como a kalunga e lojas de eletrônicos" details="O microfone tem que ser USB, porque eu uso notebook" images={presentMicrofone} />

				<PresentBox name="⭐organizador de acessorios eletronicos" 
				imgURL={organizador} images={presentOrganizador}
				whereToFind="Lojas online como Amazon, mercado livre, shopee, shein etc ou talvez até no shopping" 
				details="mochila/caixa/necessé/bolsa/estojo/organizador de armazenamento de acessórios eletrônicos" />

				<PresentBox name="cabo 3 em 1"
				imgURL={caboMultiportas} images={presentCaboMultiportas}
				whereToFind="Lojas online como Amazon, mercado livre, shopee etc ou lojas de eletrônicos" 
				details="Cabo 3 em 1 (type-c, lightning e micro USB), tem um modelo que vi na shopee que é o 'Kit Cabos Celular Adaptador Múltiplo Portátil 60w 6 Em 1' que eu tambem achei interessante" />

				<PresentBox name="⭐Luva de goleiro"
				imgURL={luvaGoleiro} images={presentLuvaGoleiro}
				whereToFind="Lojas de artigos esportivos ou lojas online como Amazon, mercado livre, shopee etc" 
				details="Luva de goleiro tamanho 8, ja que minha mão mede 17,5 cm altura e 7,5 cm diametro (sem contar o dedao)" />

				<PresentBox name="⭐Smart Watch"
				imgURL={smartWatch} images={presentSmartWatch}
				whereToFind="Lojas online como Amazon, mercado livre, shopee etc" 
				details="Não me importo com a marca, mas quanto mais coisa ele fazer melhor" />
			</main>
			
		</>
	)
}

export default App
