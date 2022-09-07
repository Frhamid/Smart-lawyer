let ppc = ["Title and extent of operation of the Code", "Punishment of offences committed within Pakistan", "Punishment of offences committed beyond, but which by law may be tried within Pakistan", "Certain laws not to be affected by this Act"];

let ans = ["This Act shall be called the Pakistan Penal Code, and shall take effect throughout Pakistan.", "Every person shall be liable to punishment under this Code and not otherwise for every act or omission contrary to the provisions thereof, of which he shall be guilty within Pakistan.", "Any person liable, by any Pakistan Law, to be tried for an offence committed beyond Pakistan shall be dealt with according to the provision of this Code for any act committed beyond Pakistan in the same manner as if such act had been committed within Pakistan.", "Nothing in this Act is intended to repeal, vary, suspend or affect any of the provisions of any Act for punishing mutiny and desertion of officers, soldiers, sailors or airmen in the service of the State or of any special or local law."];
console.log(document.getElementById('question'));
function array() {

    let b = document.getElementById('question').value;

    b = String(b).toUpperCase();


    const myArray = b.split(" ");


    return myArray;

}

function lawyer() {
    let query = array();
    let p = false;
    let count = 0;
    for (let a = 0; p != true; a++) {
        let str = ppc[a].toUpperCase();
        let code = str.split(" ");
        count = 0;
        for (let i = 0; i < query.length; i++) {
            for (let j = 0; j < code.length; j++) {
                if (query[i].length >= 4) {
                    if (query[i] == code[j]) {
                        count++;
                        if (count >= 3) {

                            document.getElementById('answere').innerHTML = ans[a];
                            p = true;
                        }

                    }
                    // else{
                    //     document.getElementById('Answere').innerHTML = 'wrong search';
                    // }

                }

            }


        }


    }



}

// ---------------------------------------------------Adding review-----------------

function added(){
    let name = document.getElementById('first_name').value;
    let cities = document.getElementById('city1').value;
    let review = document.getElementById('textarea1').value;
    let clients = document.getElementById('rows');
    console.log(cities);
    clients.innerHTML += `<div class="col s12 m4">
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <p>${review}</p>
        </div>
        <div class="card-action">
            <a id="name">${name}</a>
            <a>|</a>
            <a id="city">${cities}</a>
        </div>
    </div>
</div>`;

}




// -------------------------------------floating button

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top'
    });
  });

