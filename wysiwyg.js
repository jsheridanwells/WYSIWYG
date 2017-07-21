let people = [
  {
  name: 'Jerry Garcia',
  bio: 'Jerry Garcia was an American singer-songwriter and guitarist, best known for his work as the lead guitarist and as a vocalist with the band the Grateful Dead, which came to prominence during the counterculture era in the 1960s.',
  image: 'img/Jerry-Garcia-01.jpg',
  lifespan: {
	    birth: 1942,
	    death: 1995
	  }
  },
  {
  name: 'Lou Reed',
  bio: 'Lou Reed was an American musician, singer and songwriter. He was the guitarist, vocalist, and principal songwriter of the Velvet Underground, and his solo career spanned five decades.',
  image: 'img/Lou_Reed_1977.jpg',
  lifespan: {
	    birth: 1942,
	    death: 2013
	  }
  },
  {
  name: 'Bob Dylan',
  bio: 'Bob Dylan is an American poetic songwriter, singer, painter, writer, and Nobel prize laureate. He has been influential in popular music and culture for more than five decades.',
  image: 'img/Bob_Dylan.jpg',
  lifespan: {
	    birth: 1941,
	    death: 'present'
	  }
  }
];

let input = document.getElementById('text-input');
let peopleFrame = document.getElementById('people-frame');



for (let i = 0; i < people.length; i++) {
	let newDiv = document.createElement('div');
	newDiv.classList.add('col-md-4');
	newDiv.innerHTML = `
			<h1>${people[i].name}</h1>
			<img src="${people[i].image}" alt="${people[i].name}">
			<p>${people[i].lifespan.birth} - ${people[i].lifespan.death}</p>
	`;
	let newBio = document.createElement('p');
	newBio.classList.add('bio');
	newBio.innerHTML = `${people[i].bio}`

	newDiv.appendChild(newBio);
	peopleFrame.appendChild(newDiv);

	newDiv.addEventListener('click', makeActive);
	newBio.addEventListener('click', function (){
		let bios = document.getElementsByClassName('bio');
		for(let i = 0; i < bios.length; i++) {
			bios[i].removeAttribute('id');
		}
		this.id = 'target';
		input.value = '';
		console.log("working");
	});
}

function makeActive() {
	let contentDivs = document.getElementsByClassName('col-md-4');
	for(let i = 0; i < contentDivs.length; i++) {
		contentDivs[i].classList.remove('active');
	}
	this.classList.add('active');
	input.focus();
}

function editText() {
		let text = input.value;  //get value of text box
		let target = document.getElementById('target');
		target.innerText = text
	}

window.addEventListener('keyup', () => {
	editText();
});
